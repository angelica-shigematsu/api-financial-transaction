import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { UserModule } from './users/users.module';
import { TransferModule } from './transactions/transactions.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    TransferModule
  ],
})
export class AppModule {}
export { DatabaseModule, UserModule, TransferModule };