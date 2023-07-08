import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/modules/shared/services';
import { PetsEntity } from './entities/pet.entity';
import { PetsRepository } from './repositories/pets.repositories';

@Injectable()
export class PetsService extends BaseService<PetsEntity> {
  constructor(private readonly petsRepository: PetsRepository) {
    super(petsRepository);
  }
}
