import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BasedEntity } from '../../shared/entities/base.entity';
import { PetsImagesEntity } from './pets-images.entity';
import { PostEntity } from 'src/modules/posts/entities/post.entity';
import { UserEntity } from 'src/modules/auth/entities/user.entity';

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

  @Column({ type: 'varchar', nullable: false })
  race: string;

  @ManyToOne(()=>UserEntity,(user)=>user.pets)
  user:UserEntity

  @OneToMany(() => PetsImagesEntity, (images) => images.pets,{
    eager:true
  })
  images: PetsImagesEntity[];

  @OneToMany(() => PostEntity, (post) => post.pets)
  posts: [];
}
