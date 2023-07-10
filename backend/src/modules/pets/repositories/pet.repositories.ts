import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from 'src/modules/shared/repositories';
import { PetEntity } from '../entities/pet.entity';

@Injectable()
export class PetRepository extends BaseRepository<PetEntity> {
  constructor(
    @InjectRepository(PetEntity)
    private readonly petEntity: Repository<PetEntity>,
  ) {
    super(petEntity);
  }
}
