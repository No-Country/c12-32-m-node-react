import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { BaseService } from 'src/modules/shared/services';
import { UserEntity } from './entities/auth.entity';
import { AuthRepository } from './repositories/auth.repositories';

@Injectable()
export class AuthService extends BaseService<UserEntity> {
  constructor(private readonly authRepository: AuthRepository) {
    super(authRepository);
  }
}
