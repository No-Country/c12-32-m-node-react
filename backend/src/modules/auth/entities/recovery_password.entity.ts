import { BasedEntity } from 'src/modules/shared/entities/base.entity';
import { Column } from 'typeorm';

export class RecoveryPassword extends BasedEntity {
  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  token: string;
}
