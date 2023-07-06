import { BasedEntity } from 'src/modules/shared/entities/base.entity';
import { Entity, Column } from 'typeorm';

@Entity({name: 'users'})
export class UserEntity extends BasedEntity {
  
}
