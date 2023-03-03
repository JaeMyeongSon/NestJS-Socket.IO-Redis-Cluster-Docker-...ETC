import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { OfficeGradeType } from './officeGradeType.entity';
import { PurchaseType } from './purchaseType.entity';
import { PaymentType } from './paymentType.entity';

@Index('officeGradeType', ['officeGradeType'], {})
@Index('purchaseType', ['purchaseType'], {})
@Index('paymentType', ['paymentType'], {})
@Entity('officeProductItem')
export class OfficeProductItem {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'officeGradeType' })
  officeGradeType: number;

  @Column('int', { name: 'purchaseType' })
  purchaseType: number;

  @Column('int', { name: 'paymentType' })
  paymentType: number;

  @Column('int', { name: 'price' })
  price: number;

  @ManyToOne(() => OfficeGradeType, (officegradetype) => officegradetype.OfficeProductItems, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'officeGradeType', referencedColumnName: 'type' }])
  OfficeGradeType: OfficeGradeType;

  @ManyToOne(() => PurchaseType, (purchasetype) => purchasetype.OfficeProductItems, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'purchaseType', referencedColumnName: 'type' }])
  PurchaseType: PurchaseType;

  @ManyToOne(() => PaymentType, (paymenttype) => paymenttype.OfficeProductItems, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'paymentType', referencedColumnName: 'type' }])
  PaymentType: PaymentType;
}
