import { BasedEntity } from 'src/modules/shared/entities/base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'posts' })
export class Post extends BasedEntity {
  @Column({ nullable: false })
  user_id: number;

  @Column({ nullable: false })
  is_found: boolean;

  @Column({ nullable: false })
  likes: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  detail: string;

  @Column({ nullable: false })
  type_publication: string;

  @Column({ nullable: false })
  pets_id: number;

  @Column({ nullable: false })
  post_comment_id: number;
}
