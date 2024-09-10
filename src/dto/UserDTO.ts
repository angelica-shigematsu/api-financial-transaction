import { IsNotEmpty, IsNumber, Length, Matches } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @Length(5, 30)
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}