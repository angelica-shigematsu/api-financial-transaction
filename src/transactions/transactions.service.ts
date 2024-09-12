import { Inject, Injectable } from "@nestjs/common";
import { Transaction } from "../entity/Transaction";
import { User } from "../entity/User";
import { TypeOperation } from "../type/TypeOperation";
import { UserService } from "../users/users.services";
import { Repository } from "typeorm";
import { CreateTransactionDto } from "src/dto/TransactionDTO";

@Injectable()
export class TransactionService {
  constructor(
    @Inject('TRANSACTIONS_REPOSITORY')
    private transactionRepository: Repository<Transaction>,
    private userRepository: Repository<User>,
    private userService: UserService
  ) {}

  async createTransaction(id: number, transactionDto: CreateTransactionDto) {

    await this.checkAntiFraudTransaction(id);

    if (transactionDto.typeOperation == TypeOperation.DEPOSITO) {

      await this.deposit(id, transactionDto.value);

    } else if (transactionDto.typeOperation == TypeOperation.SAQUE) {

      await this.withdraw(id, transactionDto.value);

    } else {
      await this.transfer(id, transactionDto.destinationAccountId, transactionDto.value);
    }

    const transaction = {
      typeOperation: transactionDto.typeOperation,
      date: new Date(),
      status: 'success',
      value: transactionDto.value
    }
    
    this.transactionRepository.save(transaction);
  }

  async deposit(id: number, valueDeposit: number) {
    let user = await this.userService.findOneById(id);

    if (valueDeposit <= 0) throw new Error(`Can't deposit negative money`);

    user.bankBalance = valueDeposit + user.bankBalance

    this.userRepository.save(user)
  }

  async withdraw(id: number, valueWithdraw: number) {

    let user = await this.userService.findOneById(id);

    if (valueWithdraw <= 0) throw new Error(`Can't deposit negative money`);

    if (valueWithdraw <= 0 || valueWithdraw > user.bankBalance) throw new Error(`Can't deposit negative money`);

    user.bankBalance =  user.bankBalance - valueWithdraw;

    this.userRepository.save(user);
  }

  async transfer(id: number, destinationAccountId: number, value: number) {

    await this.withdraw(id, value);

    await this.deposit(destinationAccountId, value);
  }

  async checkAntiFraudTransaction(id: number) {
    const user = await this.transactionRepository.findOne({
      where: { userId: id },
      order: {
        date: "DESC"
      }
    })

    const breakBetweenTransaction = new Date().getMinutes() - user.date.getMinutes();

    if (breakBetweenTransaction < 10) throw new Error(`Can't do transaction less than 10 minutes after`)
  }
}