import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetsEntity } from './entities/pet.entity';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { PetsRepository } from './repositories/pets.repositories';
import { PetsImagesEntity } from './entities/pets-images.entity';
import { Repository } from 'typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([PetsEntity, PetsImagesEntity]),AuthModule],

  controllers: [PetsController],

  providers: [PetsService, PetsRepository,Repository],
})
export class PetsModule {}
