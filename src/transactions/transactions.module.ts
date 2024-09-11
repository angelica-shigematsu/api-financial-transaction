import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { TransactionController } from './transactions.controller';
import { transactionProviders } from './transactions.providers';
import { TransactionService } from './transactions.service';

@Module({
  imports: [DatabaseModule, TransferModule],
  providers: [
    ...transactionProviders,
    TransactionService
  ],
  controllers: [TransactionController],
})
export class TransferModule {}