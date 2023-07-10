import { BasedEntity } from 'src/modules/shared/entities/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class PetEntity extends BasedEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  category_animal_id: string;

  @Column({ nullable: false })
  size: number;

  @Column({ nullable: false })
  age: number;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: false })
  last_seen: string;

  @Column({ nullable: false })
  race: string;

  @Column({ nullable: false })
  user_id: string;
}
