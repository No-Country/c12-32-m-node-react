import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from 'src/modules/shared/repositories';
import { UserEntity } from '../entities/auth.entity';

@Injectable()
export class AuthRepository extends BaseRepository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly authEntity: Repository<UserEntity>,
  ) {
    super(authEntity);
  }
}
