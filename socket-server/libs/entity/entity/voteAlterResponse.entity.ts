import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { VoteAlterResType } from './voteAlterResType.entity';

@Index('alterResType', ['alterResType'], {})
@Entity('votealterresponse')
export class VoteAlterResponse {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { primary: true, name: 'alterResType' })
  alterResType: number;

  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @ManyToOne(() => VoteAlterResType, (votealterrestype) => votealterrestype.VoteAlterResponses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'alterResType', referencedColumnName: 'type' }])
  VoteAlterResType: VoteAlterResType;
}
