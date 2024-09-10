import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/UserDTO';
import { User } from 'src/entity/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    return this.userRepository.create(userDto);
  }
  async findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } } );
  }
}