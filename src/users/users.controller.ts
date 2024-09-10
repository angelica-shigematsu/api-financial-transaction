import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/UserDTO';
import { UserService } from './users.services';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    const user = await this.userService.findOneByEmail(userDto.email);

    if (user) throw new Error(`User ${user.email} already exists`);

    return this.userService.createUser(userDto);
  }
}
