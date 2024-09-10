import { Module } from '@nestjs/common';
import { userProviders } from './user.providers';
import { UserService } from './users.services';
import { DatabaseModule } from 'src/database.module';
import { UsersController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService,
  ],
  controllers: [UsersController],
})
export class UserModule {}