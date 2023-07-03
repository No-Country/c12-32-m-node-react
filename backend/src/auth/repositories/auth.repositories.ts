import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from 'src/shared/repositories';
import { AuthEntity } from '../entities/auth.entity';

@Injectable()
export class AuthRepository extends BaseRepository<AuthEntity> {
  constructor(
    @InjectRepository(AuthEntity)
    private readonly authEntity: Repository<AuthEntity>,
  ) {
    super(authEntity);
  }
}
