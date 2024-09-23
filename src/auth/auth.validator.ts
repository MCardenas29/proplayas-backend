import { IsDefined, IsNotEmpty } from 'class-validator';

export class SignInValidator {
  @IsDefined()
  @IsNotEmpty()
  readonly email: string;

  @IsDefined()
  @IsNotEmpty()
  readonly password: string;
}
