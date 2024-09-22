import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  email: string;

  @Property({ length: 72 })
  password: string;
}
