import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInValidator } from './auth.validator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() body: SignInValidator) {
    const token = await this.authService.signIn(body.email, body.password);
    return token;
  }
}
