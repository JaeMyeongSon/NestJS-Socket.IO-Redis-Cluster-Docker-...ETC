import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity('resignpurchaseinfo')
export class ResignPurchaseInfo {
  @Column('varchar', { primary: true, name: 'orderId', length: 100 })
  orderId: string;

  @Column('varchar', { name: 'memberId', length: 100 })
  memberId: string;

  @Column('datetime', { name: 'purchasedAt' })
  purchasedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
