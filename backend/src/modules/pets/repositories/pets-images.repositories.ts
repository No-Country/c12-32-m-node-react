import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../shared/repositories';
import { PetsImagesEntity } from '../entities/pets-images.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CloudinaryService } from '../services/cloudinary.service';
import { PetsEntity } from '../entities/pet.entity';
import { RespuestaService } from '../../shared/services';

@Injectable()
export class PetsImagesRepository extends BaseRepository<PetsImagesEntity> {
  _main = 'PetsImagesRepository';
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    @InjectRepository(PetsImagesEntity)
    private readonly petsImagesEntity: Repository<PetsImagesEntity>,
    private respuestaService: RespuestaService,
  ) {
    super(petsImagesEntity);
  }

  async uploadImages(petsId: string, files: Express.Multer.File[]) {
    const ruta = this._main + ' /CreatePets';
    const images = await Promise.all(
      files.map((file) => this.cloudinaryService.upload(file)),
    );
    const petsImagesEntity = new PetsImagesEntity();
    petsImagesEntity.pets = new PetsEntity();
    petsImagesEntity.pets.id = petsId;
    petsImagesEntity.images = images;

    // Guardar la entidad en la base de datos usando TypeORM
    const resp = await this.petsImagesEntity.save(petsImagesEntity);
    const { pets } = resp;
    const simplifiedResponse = {
      pets,
      images: images.map((image) => image.url),
    };
    return this.respuestaService.respuestaHttp(
      true,
      simplifiedResponse,
      ruta,
      'Registro exitoso',
    );
  }
}
