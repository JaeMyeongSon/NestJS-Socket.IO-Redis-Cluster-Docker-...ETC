import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, UpdateDateColumn } from 'typeorm';
import { Member } from './member.entity';
import { Item } from './item.entity';
import { MemberAvatarInfo } from './memberAvatarInfo.entity';

@Index('itemId', ['itemId'], {})
@Entity('memberAvatarPartsItemInven')
export class MemberAvatarPartsItemInven {
  @Column('varchar', { primary: true, name: 'memberId', length: 100 })
  memberId: string;

  @Column('int', { primary: true, name: 'itemId' })
  itemId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Member, (member) => member.MemberAvatarPartsItemInvens, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberId', referencedColumnName: 'memberId' }])
  Member: Member;

  @ManyToOne(() => Item, (item) => item.MemberAvatarPartsItemInvens, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'itemId', referencedColumnName: 'id' }])
  Item: Item;
}
