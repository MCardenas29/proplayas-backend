import { PartialType, PickType } from '@nestjs/mapped-types';
import { IsEmail, IsEnum, IsString, Length } from 'class-validator';
import { UserRole } from '../role/role.enum';

export class UserValidator {
  @IsEmail()
  email: string;

  @Length(8)
  @IsString()
  password: string;

  @IsEnum(UserRole)
  role?: UserRole;
}

export class UserCreateValidator extends PickType(UserValidator, [
  'email',
  'password',
] as const) {}

export class UserUpdateValidator extends PartialType(UserValidator) {}
