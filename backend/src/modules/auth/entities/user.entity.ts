import { PostEntity } from 'src/modules/posts/entities/post.entity';
import { PostCommentEntity } from 'src/modules/posts/entities/post_comment.entity';
import { BasedEntity } from 'src/modules/shared/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends BasedEntity {
  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'varchar', nullable: true, name: 'last_name' })
  lastName: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: true })
  phone: string;

  @Column({ type: 'varchar', nullable: true })
  city: string;

  @Column({ type: 'bool', default: true })
  isActive: boolean;

  @Column({ type: 'text', array: true, default: ['user'] })
  role: string[];


  @OneToMany(()=> PostEntity,(post)=>post.user)
  posts:PostEntity[]
  @OneToMany(()=> PostCommentEntity,(comment)=>comment.user)
  comments:PostCommentEntity[]

}
