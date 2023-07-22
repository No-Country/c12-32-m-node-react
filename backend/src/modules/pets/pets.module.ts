import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetsEntity } from './entities/pet.entity';
<<<<<<< HEAD
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
=======
import { PetsController } from './controllers/pets.controller';
import { PetsService } from './services/pets.service';
>>>>>>> e0f3ea3f32d22b1288a628470f43b045659e8cfe
import { PetsRepository } from './repositories/pets.repositories';
import { PetsImagesEntity } from './entities/pets-images.entity';
import { Repository } from 'typeorm';
import { AuthModule } from '../auth/auth.module';
<<<<<<< HEAD

@Module({
  imports: [TypeOrmModule.forFeature([PetsEntity, PetsImagesEntity]),AuthModule],

  controllers: [PetsController],

  providers: [PetsService, PetsRepository,Repository],
=======
import { CloudinaryService } from './services/cloudinary.service';
import { PetsImagesRepository } from './repositories/pets-images.repositories';
import { PetsImagesService } from './services/pets-images.service';
import { PetsImagesController } from './controllers/pets-images.controller';
import { RespuestaService } from '../shared/services';
import { JwtUtil } from '../shared/services/jwt.util';

@Module({
  imports: [
    TypeOrmModule.forFeature([PetsEntity, PetsImagesEntity]),
    AuthModule,
  ],

  controllers: [PetsController, PetsImagesController],

  providers: [
    PetsService,
    PetsRepository,
    Repository,
    CloudinaryService,
    PetsImagesRepository,
    PetsImagesService,
    RespuestaService,
    JwtUtil,
  ],
>>>>>>> e0f3ea3f32d22b1288a628470f43b045659e8cfe
})
export class PetsModule {}
