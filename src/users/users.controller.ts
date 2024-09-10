import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/UserDTO';
import { UserService } from './users.services';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    const user = await this.userService.findOneByEmail(userDto.email);

    if (user) throw new Error(`User ${user.email} already exists`);

    return await this.userService.createUser(userDto);
  }

  @Put('/:id')
  async disableAccount(@Param() id: number) {
    return this.userService.disableAccessUser(id);
  }

  @Put('saldo/:id')
  async showBankBalance(@Param() id: number) {
    return this.userService.showBankBalance(id);
  }
}
