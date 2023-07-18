import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../shared/repositories';
import { PetsImagesEntity } from '../entities/pets-images.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CloudinaryService } from '../services/cloudinary.service';
import { PetsEntity } from '../entities/pet.entity';

@Injectable()
export class PetsImagesRepository extends BaseRepository<PetsImagesEntity> {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    @InjectRepository(PetsImagesEntity)
    private readonly petsImagesEntity: Repository<PetsImagesEntity>,
  ) {
    super(petsImagesEntity);
  }

  async uploadImages(
    petsId: string,
    files: Express.Multer.File[],
  ): Promise<PetsImagesEntity> {
    const images = await Promise.all(
      files.map((file) => this.cloudinaryService.upload(file)),
    );
    const petsImagesEntity = new PetsImagesEntity();
    petsImagesEntity.pets = new PetsEntity();
    petsImagesEntity.pets.id = petsId;
    petsImagesEntity.images = images;

    // Guardar la entidad en la base de datos usando TypeORM
    return this.petsImagesEntity.save(petsImagesEntity);
  }
}
