import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { AccountController } from './account/account.controller';
import { UsersController } from './users/users.controller';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatabaseModule {}