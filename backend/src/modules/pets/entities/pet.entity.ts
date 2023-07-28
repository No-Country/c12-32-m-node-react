import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasedEntity } from '../../shared/entities/base.entity';
import { PetsImagesEntity } from './pets-images.entity';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { PostCommentEntity } from './pets-comment.entity';

@Entity({ name: 'pets' })
export class PetsEntity extends BasedEntity {

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'int',nullable: true,default:0  })
  likes: number;

  @Column({ type: 'varchar', nullable: false })
  pet_name: string;

  @Column({ type: 'varchar', nullable: false })
  pet_description: string;

  @Column({ type: 'varchar', nullable: false })
  size: string;

  @Column({ type: 'varchar', nullable: false })
  age: string;

  @Column({ type: 'varchar', nullable: false })
  gender: string;

  @Column({ type: 'varchar', nullable: false, name: 'last_seen' })
  lastSeen: string;

  @Column({ type: 'varchar', nullable: false })
  direction:string

  @Column({ type: 'varchar', nullable: false })
  phone:string

  @Column({ type: 'varchar', nullable: false })
  post_category:string

  @ManyToOne(() => UserEntity, (user) => user.pets)
  user: UserEntity;

  @OneToMany(() => PetsImagesEntity, (images) => images.pets, {
    cascade:true,
    onDelete:"CASCADE",
    eager: true,
  })
  images: PetsImagesEntity[];


  @OneToMany(() => PostCommentEntity, (comment) => comment.pets,{
    onDelete:"CASCADE",
    eager:true
  })
  comments: PostCommentEntity[];
}
