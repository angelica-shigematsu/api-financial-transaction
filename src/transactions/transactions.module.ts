import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { TransactionController } from './transactions.controller';
import { transactionProviders } from './transactions.providers';
import { TransactionService } from './transactions.service';
import { UserModule } from 'src/app.module';

@Module({
  imports: [DatabaseModule, TransferModule, UserModule],
  providers: [
    ...transactionProviders,
    TransactionService
  ],
  controllers: [TransactionController],
})
export class TransferModule {}