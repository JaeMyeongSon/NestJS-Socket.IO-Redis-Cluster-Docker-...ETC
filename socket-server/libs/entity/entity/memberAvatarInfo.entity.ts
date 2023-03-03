import { MemberAvatarPartsItemInven } from './memberAvatarPartsItemInven.entity';
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { Member } from './member.entity';
import { AvatarPartsType } from './avatarPartsType.entity';
import { AvatarParts } from './avatarParts.entity';
import { Item } from './item.entity';

@Index('avatarPartsType', ['avatarPartsType'], {})
@Index('itemId', ['itemId'], {})
@Entity('memberavatarinfo')
export class MemberAvatarInfo {
  @Column('varchar', { primary: true, name: 'memberId', length: 100 })
  memberId: string;

  @Column('int', { primary: true, name: 'avatarPartsType' })
  avatarPartsType: number;

  @Column('int', { name: 'itemId' })
  itemId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Member, (member) => member.MemberAvatarInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberId', referencedColumnName: 'memberId' }])
  Member: Member;

  @ManyToOne(() => AvatarPartsType, (avatarpartstype) => avatarpartstype.MemberAvatarInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'avatarPartsType', referencedColumnName: 'type' }])
  AvatarPartsType: AvatarPartsType;

  @ManyToOne(() => Item, (item) => item.MemberAvatarInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'itemId', referencedColumnName: 'id' }])
  Item: Item;
}
