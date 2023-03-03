import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { OfficeProductItem } from './officeProductItem.entity';
import { Localization } from './localization.entity';

@Index('name', ['name'], {})
@Entity('paymentType')
export class PaymentType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @OneToMany(() => OfficeProductItem, (authority) => authority.PaymentType)
  OfficeProductItems: OfficeProductItem[];

  @ManyToOne(() => Localization, (localization) => localization.PaymentTypes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'name', referencedColumnName: 'id' }])
  LocalizationName: Localization;
}
