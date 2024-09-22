import { Injectable } from '@nestjs/common';
import { User, UserRepo } from './user.entity';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly repo: UserRepo) {}

  async registerUser(email: string, password: string) {
    const hashedPasswd = await bcrypt.hash(password, 12);
    const newUser = this.repo.create({
      email: email,
      password: hashedPasswd,
    });
    return newUser;
  }

  async changePassword(user: User, newPassword: string) {
    const hashedPasswd = await bcrypt.hash(newPassword, 12);
    user.password = hashedPasswd;
    return true;
  }
}
