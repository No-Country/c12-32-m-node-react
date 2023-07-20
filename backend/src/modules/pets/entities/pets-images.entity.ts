import { Column, Entity, ManyToOne } from 'typeorm';
import { BasedEntity } from '../../shared/entities/base.entity';
import { PetsEntity } from './pet.entity';

@Entity({ name: 'pets_images' })
export class PetsImagesEntity extends BasedEntity {
  /*
  @Column({ type: 'integer', nullable: false, name: 'id_pets' }) // relacion con pets
  idPets: number;
  */
  @Column({ type: 'varchar',array:true, nullable: false })
  images: string[];

  @ManyToOne(()=> PetsEntity,(pet)=>pet.images)
  pets:PetsEntity
}
