import { IsNotEmpty } from "class-validator";
import { TypeOperation } from "src/type/TypeOperation";

export class CreateTransactionDto {
  @IsNotEmpty()
  typeOperation: TypeOperation;

  @IsNotEmpty()
  value: number;

  destinationAccountId?: number
}