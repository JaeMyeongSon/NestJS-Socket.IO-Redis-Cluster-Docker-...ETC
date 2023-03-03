import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { Member } from './member.entity';

@Index('friendMemberId', ['friendMemberId'], {})
@Entity('memberfriend')
export class MemberFriend {
  @Column('varchar', { primary: true, name: 'memberId', length: 100 })
  memberId: string;

  @Column('varchar', { primary: true, name: 'friendMemberId', length: 100 })
  friendMemberId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Member, (member) => member.OwnerMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberId', referencedColumnName: 'memberId' }])
  Member: Member;

  @ManyToOne(() => Member, (member) => member.MemberFriends, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'friendMemberId', referencedColumnName: 'memberId' }])
  friendMember: Member;
}
