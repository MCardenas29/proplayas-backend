import {
  NotFoundException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
  Delete,
  Query,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserInterceptor } from './user.interceptor';
import { UserService } from './user.service';
import { UserCreateValidator, UserUpdateValidator } from './user.valiadator';
import { Roles } from '../role/role.decorator';
import { UserRole } from '../role/role.enum';
import { EntityManager } from '@mikro-orm/core';
import { SignedIn } from 'src/auth/auth.decorator';

@UseInterceptors(UserInterceptor)
@Controller('users')
export class UserController {
  constructor(
    private readonly em: EntityManager,
    private readonly userService: UserService,
  ) {}

  @Get()
  @SignedIn(true)
  async getUsers(
    @Query('limit') limit: number = 20,
    @Query('page') page: number = 0,
  ) {
    return await this.em.findAll(User, {
      limit,
      offset: limit * page,
    });
  }

  @Post()
  async createUser(@Body() data: UserCreateValidator) {
    const user = await this.userService.create(data.email, data.password);
    await this.em.flush();
    return user;
  }

  @Get(':mail')
  async getUser(@Param('mail') email: string) {
    const user = await this.em.findOne(User, { email });
    if (!user) throw new NotFoundException();
    return user;
  }

  @Patch(':mail')
  async updateUser(
    @Param('mail') email: string,
    @Body() changes: UserUpdateValidator,
  ) {
    const user = await this.userService.update(email, changes as User);
    await this.em.flush();
    return user;
  }

  @Delete(':mail')
  @Roles([UserRole.ADMIN])
  async deleteUser(@Param('mail') email: string) {
    const resp = await this.userService.delete(email);
    return resp.user;
  }
}
