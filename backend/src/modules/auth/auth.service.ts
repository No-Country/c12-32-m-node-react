import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseService } from 'src/modules/shared/services';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/auth.repositories';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService extends BaseService<UserEntity> {
  constructor(private readonly userRepository: UserRepository) {
    super(userRepository);
  }

  async createUserEncrypt(createUserDto: CreateUserDto) {
    return await this.userRepository.createUserEncrypt(createUserDto);
  }

  async loginUser(loginDto: LoginUserDto) {
    return await this.userRepository.loginUser(loginDto);
  }
}
