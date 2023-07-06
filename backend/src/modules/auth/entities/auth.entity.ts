import { BasedEntity } from 'src/modules/shared/entities/base.entity';
import { Entity } from 'typeorm';

@Entity({ name: 'auth' })
export class AuthEntity extends BasedEntity {}
