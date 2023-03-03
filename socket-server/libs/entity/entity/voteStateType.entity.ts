import { Column, Entity } from 'typeorm';

@Entity('votestatetype')
export class VoteStateType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;
}
