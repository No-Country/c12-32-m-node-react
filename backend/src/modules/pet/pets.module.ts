import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetsEntity } from './entities/pet.entity';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { PetsRepository } from './repositories/pets.repositories';

@Module({
  imports: [TypeOrmModule.forFeature([PetsEntity])],

  controllers: [PetsController],

  providers: [PetsService, PetsRepository],
})
export class PetsModule {}
