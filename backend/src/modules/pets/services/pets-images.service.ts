import { Injectable } from '@nestjs/common';
import { BaseService } from '../../shared/services';
import { PetsImagesEntity } from '../entities/pets-images.entity';
import { PetsImagesRepository } from '../repositories/pets-images.repositories';

@Injectable()
export class PetsImagesService extends BaseService<PetsImagesEntity> {
  constructor(private readonly petsImagesRepository: PetsImagesRepository) {
    super(petsImagesRepository);
  }
/*
  async createPetsImagesRepository(
    petsId: string,
    files: Express.Multer.File[],
  ) {
    return await this.petsImagesRepository.uploadImages(petsId, files);
  }
  */
}
