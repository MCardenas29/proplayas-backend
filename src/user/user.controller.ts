import {
  NotFoundException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
  BadRequestException,
  Delete,
} from '@nestjs/common';
import { UserCreate, UserRepo, UserUpdate } from './user.entity';
import { UserInterceptor } from './user.interceptor';
import { UserService } from './user.service';

@UseInterceptors(UserInterceptor)
@Controller('users')
export class UserController {
  constructor(
    private readonly repo: UserRepo,
    private readonly service: UserService,
  ) {}

  @Get()
  async getUsers() {
    return await this.repo.findAll();
  }

  @Post()
  async createUser(@Body() user: UserCreate) {
    if (await this.repo.findOne({ email: user.email }))
      throw new BadRequestException('User exists');

    const new_user = await this.service.registerUser(user.email, user.password);
    await this.repo.getEntityManager().flush();
    return new_user;
  }

  @Get(':mail')
  async getUser(@Param('mail') email: string) {
    const user = await this.repo.findOne({ email });
    if (!user) throw new NotFoundException();
    return user;
  }

  @Patch(':mail')
  async updateUser(@Param('mail') email: string, @Body() changes: UserUpdate) {
    const user = await this.repo.findOne({ email });
    if (!user) throw new NotFoundException();
    for (const k in changes) user[k] = changes[k];
    this.repo.getEntityManager().flush();
    return user;
  }

  @Delete(':mail')
  async deleteUser(@Param('mail') email: string) {
    const user = await this.repo.findOne({ email });
    if (!user) throw new NotFoundException();
    await this.repo.nativeDelete(user);
    return user;
  }
}
