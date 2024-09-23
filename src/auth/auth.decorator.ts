import { Reflector } from '@nestjs/core';
import { Request } from 'express';

export const SignedIn = Reflector.createDecorator<
  ((req: Request) => string) | true
>();
