import { Injectable } from '@nestjs/common';
import { UserRole } from './role.enum';
import { User } from '../user/user.entity';

@Injectable()
export class RoleService {
  isAllowed(roles: UserRole[], user: User): boolean {
    return roles.includes(user.role);
  }
}
