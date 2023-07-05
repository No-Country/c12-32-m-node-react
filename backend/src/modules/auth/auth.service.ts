import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { BaseService } from 'src/modules/shared/services';
import { AuthEntity } from './entities/auth.entity';
import { AuthRepository } from './repositories/auth.repositories';

@Injectable()
export class AuthService extends BaseService<AuthEntity> {
  constructor(
    private readonly authRepository: AuthRepository,
    ){
    super(authRepository);
    }
}
