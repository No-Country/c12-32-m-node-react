import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from 'src/modules/shared/repositories';
import { PetsEntity } from '../entities/pet.entity';

@Injectable()
export class PetsRepository extends BaseRepository<PetsEntity> {
  constructor(
    @InjectRepository(PetsEntity)
    private readonly petsEntity: Repository<PetsEntity>,
  ) {
    super(petsEntity);
  }
}
