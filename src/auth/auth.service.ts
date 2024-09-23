import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { EntityManager } from '@mikro-orm/core';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly em: EntityManager,
    private readonly jwt: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.em.findOne(User, { email });
    if (!user) throw new NotFoundException();
    if (!(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException();

    return {
      auth_token: await this.jwt.signAsync({
        email: user.email,
      }),
    };
  }
}
