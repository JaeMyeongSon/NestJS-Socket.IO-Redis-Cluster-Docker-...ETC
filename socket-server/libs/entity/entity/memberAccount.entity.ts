import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { Member } from './member.entity';
import { ProviderType } from './providerType.entity';

@Index('providerType', ['providerType'], {})
@Index('accountToken', ['accountToken'], { unique: true })
@Entity('memberaccount')
export class MemberAccount {
  @Column('varchar', { primary: true, name: 'memberId', length: 100 })
  memberId: string;

  @Column('int', { primary: true, name: 'providerType' })
  providerType: number;

  @Column('varchar', { unique: true, name: 'accountToken', length: 100 })
  accountToken: string;

  @Column('varchar', { name: 'password', nullable: true, length: 100 })
  password: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Member, (member) => member.MemberAccounts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberId', referencedColumnName: 'memberId' }])
  Member: Member;

  @ManyToOne(() => ProviderType, (providertype) => providertype.MemberAccounts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'providerType', referencedColumnName: 'type' }])
  ProviderType: ProviderType;
}
