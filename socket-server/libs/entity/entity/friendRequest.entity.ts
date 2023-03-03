import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { Member } from './member.entity';

@Index('receivedMemberId', ['receivedMemberId'], {})
@Entity('friendrequest')
export class FriendRequest {
  @Column('varchar', { primary: true, name: 'requestMemberId', length: 100 })
  requestMemberId: string;

  @Column('varchar', { primary: true, name: 'receivedMemberId', length: 100 })
  receivedMemberId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Member, (member) => member.RequestMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'requestMemberId', referencedColumnName: 'memberId' }])
  RequestMember: Member;

  @ManyToOne(() => Member, (member) => member.ReceivedMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'receivedMemberId', referencedColumnName: 'memberId' }])
  ReceivedMember: Member;
}
