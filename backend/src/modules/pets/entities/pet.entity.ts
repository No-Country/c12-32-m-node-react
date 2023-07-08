import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BasedEntity } from '../../shared/entities/base.entity';

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
}
