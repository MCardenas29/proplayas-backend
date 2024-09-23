import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './user.entity';
import bcrypt from 'bcrypt';
import { EntityManager } from '@mikro-orm/core';

@Injectable()
export class UserService {
  constructor(private readonly em: EntityManager) {}

  async create(email: string, password: string) {
    if (await this.em.findOne(User, { email }))
      throw new BadRequestException('User exists');

    const hashedPasswd = await bcrypt.hash(password, 12);
    return this.em.create(User, {
      email: email,
      password: hashedPasswd,
    });
  }

  async delete(email: string) {
    const user = await this.em.findOne(User, { email });
    if (!user) throw new NotFoundException();
    const res = this.em.remove(user);

    return {
      user,
      delete: res,
    };
  }

  async update(email: string, changes: User) {
    const user = await this.em.findOne(User, { email });
    if (!user) throw new NotFoundException();
    for (const k in changes) user[k] = changes[k];
    return user;
  }
}
