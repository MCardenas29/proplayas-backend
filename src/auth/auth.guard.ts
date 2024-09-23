import { EntityManager } from '@mikro-orm/core';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { SignedIn } from './auth.decorator';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly em: EntityManager,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext) {
    const reflection = this.reflector.get(SignedIn, context.getHandler());
    console.log(reflection);
    if (!reflection) return true;

    // Verify the session
    const request = context.switchToHttp().getRequest<Request>();
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (type !== 'Bearer' || !token) throw new UnauthorizedException();
    const payload: User = await this.jwtService
      .verifyAsync(token)
      .catch((r) => console.error(r));
    if (!payload) throw new UnauthorizedException();
    request['user'] = payload;

    if (reflection === true) return true;
    const email = reflection(request);
    if (email !== payload.email) throw new UnauthorizedException();
    return true;
  }
}
