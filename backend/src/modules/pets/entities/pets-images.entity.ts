import { Column, Entity } from 'typeorm';
import { BasedEntity } from '../../shared/entities/base.entity';

@Entity({ name: 'pets_images' })
export class PetsImagesEntity extends BasedEntity {
  @Column({ type: 'integer', nullable: false, name: 'id_pets' }) // relacion con pets
  idPets: number;

  @Column({ type: 'varchar', nullable: false })
  images: string;
}
