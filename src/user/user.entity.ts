import {
  Entity,
  EntityRepositoryType,
  Enum,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { UserRole } from '../role/role.enum';

@Entity()
export class User {
  @PrimaryKey()
  email: string;

  @Property({ length: 72 })
  password: string;

  @Enum({ items: () => UserRole, nullable: true, default: null })
  role?: UserRole = null;
}
