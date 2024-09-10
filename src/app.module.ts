import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule
  ],
})
export class AppModule {}
export { DatabaseModule, UserModule };