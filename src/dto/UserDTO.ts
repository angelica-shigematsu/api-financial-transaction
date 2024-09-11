import { IsEmail, IsNotEmpty, Length  } from "class-validator";
import { UserType } from "src/type/UserType";

export class CreateUserDto {
  @IsNotEmpty()
  @Length(5, 30)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  accessUser: UserType;
}