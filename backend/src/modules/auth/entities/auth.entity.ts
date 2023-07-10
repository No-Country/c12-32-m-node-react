import { BasedEntity } from 'src/modules/shared/entities/base.entity';
import { Entity, Column } from 'typeorm';

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
@Entity({ name: 'users' })
export class UserEntity extends BasedEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  phone: number;

  @Column({ nullable: true })
  city: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
    nullable: false,
  })
  role: string;
}
