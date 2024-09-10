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
    const user = {
      ...userDto,
      bankBalance: 0,
      active: true
    }
    return this.userRepository.save(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } } );
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { id: id }
    })
  }

  async disableAccessUser(id: number) {
    const user = await this.findOneById(id);

    if (!user) throw new Error(`User isn't found`)

    user.active = false;

    user.save();

    return 'Usuário desabilitado'
  }

  async showBankBalance(id: number) {
    const user = await this.findOneById(id);

    return { saldo: user.bankBalance };
  }
}