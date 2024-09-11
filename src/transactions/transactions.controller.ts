import { Body, Controller, Param, Post } from "@nestjs/common";
import { TransactionService } from "./transactions.service";
import { CreateTransactionDto } from "src/dto/TransactionDTO";

@Controller('transfer')
export class TransactionController {
  constructor(private transactionService: TransactionService
  ) {}

  @Post('/deposit/:id')
  async deposit(@Param() id: number, @Body() transactionDto: CreateTransactionDto) {

    return await this.transactionService.createTransaction(id, transactionDto);
  }

  @Post('/withdraw/:id')
  async withdraw(@Param() id: number, @Body() transactionDto: CreateTransactionDto) {

    return await this.transactionService.createTransaction(id, transactionDto);
  }

  @Post('/:id')
  async transfer(@Param() id: number, @Body() transactionDto: CreateTransactionDto) {

    return await this.transactionService.createTransaction(id, transactionDto);
  }

}