import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mariadb';
import { PartialType, PickType } from '@nestjs/mapped-types';
import { IsEmail, IsString, Length } from 'class-validator';

@Entity({ repository: () => UserRepo })
export class User {
  [EntityRepositoryType]?: UserRepo;

  @PrimaryKey()
  @IsEmail()
  email: string;

  @Length(8)
  @IsString()
  @Property({ length: 72 })
  password: string;
}

export class UserRepo extends EntityRepository<User> {}
export class UserCreate extends PickType(User, [
  'email',
  'password',
] as const) {}
export class UserUpdate extends PartialType(User) {}
