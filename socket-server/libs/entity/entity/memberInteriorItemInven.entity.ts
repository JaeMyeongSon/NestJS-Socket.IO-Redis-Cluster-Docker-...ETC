import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, UpdateDateColumn } from 'typeorm';
import { Member } from './member.entity';
import { Item } from './item.entity';
import { MemberMyRoomInfo } from './memberMyRoomInfo.entity';

@Index('itemId', ['itemId'], {})
@Entity('memberinterioriteminven')
export class MemberInteriorItemInven {
  @Column('varchar', { primary: true, name: 'memberId', length: 100 })
  memberId: string;

  @Column('int', { primary: true, name: 'itemId' })
  itemId: number;

  @Column('int', { name: 'count' })
  count: number;

  @Column('int', { name: 'useCount', default: () => "'0'" })
  useCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Member, (member) => member.MemberInteriorItemInvens, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberId', referencedColumnName: 'memberId' }])
  Member: Member;

  @ManyToOne(() => Item, (item) => item.MemberInteriorItemInvens, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'itemId', referencedColumnName: 'id' }])
  Item: Item;

  @OneToMany(() => MemberMyRoomInfo, (membermyroominfo) => membermyroominfo.MemberInteriorItemInven)
  MemberMyRoomInfos: MemberMyRoomInfo[];
}
