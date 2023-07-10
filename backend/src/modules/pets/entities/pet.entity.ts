import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BasedEntity } from '../../shared/entities/base.entity';
import { PetsImagesEntity } from './pets-images.entity';
import { PostEntity } from 'src/modules/posts/entities/post.entity';

@Entity({ name: 'pets' })
export class PetsEntity extends BasedEntity {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'integer', nullable: false })
  size: number;

  @Column({ type: 'integer', nullable: false })
  age: number;

  @Column({ type: 'varchar', nullable: false })
  gender: string;

  @Column({ type: 'varchar', nullable: false, name: 'last_seen' })
  lastSeen: string;

  @Column({ type: 'integer', nullable: false })
  race: string;

  @OneToMany(()=> PetsImagesEntity,(images)=>images.pets)
  images:PetsImagesEntity[]

  @OneToMany(()=> PostEntity,(post)=>post.pets)
  posts:[]
}
