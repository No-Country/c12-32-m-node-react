import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/modules/shared/services';
import { PetsEntity } from './entities/pet.entity';
import { PetsRepository } from './repositories/pets.repositories';
import { CreatePetsDto } from './dto/create-pets.dto';
import { JwtUtil } from '../shared/services/jwt.util';

@Injectable()
export class PetsService extends BaseService<PetsEntity> {
  constructor(
    private jwtService: JwtUtil,
    private readonly petsRepository: PetsRepository
    ) {
    super(petsRepository);
  }
  

  async getPetsByUser(user_id:string){
    return await this.petsRepository.getAllpetsByuser(user_id)
  }
}
