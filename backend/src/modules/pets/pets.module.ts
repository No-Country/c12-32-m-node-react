import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetsEntity } from './entities/pet.entity';
import { PetsController } from './controllers/pets.controller';
import { PetsService } from './services/pets.service';
import { PetsRepository } from './repositories/pets.repositories';
import { PetsImagesEntity } from './entities/pets-images.entity';
import { Repository } from 'typeorm';
import { AuthModule } from '../auth/auth.module';
import { CloudinaryService } from './services/cloudinary.service';
import { PetsImagesRepository } from './repositories/pets-images.repositories';
import { PetsImagesService } from './services/pets-images.service';
import { PetsImagesController } from './controllers/pets-images.controller';
import { RespuestaService } from '../shared/services';
import { JwtUtil } from '../shared/services/jwt.util';
import { PostCommentEntity } from './entities/pets-comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PetsEntity, PetsImagesEntity,PostCommentEntity]),
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
  exports:[PetsService,PetsRepository,PetsImagesRepository,Repository]
})
export class PetsModule {}
