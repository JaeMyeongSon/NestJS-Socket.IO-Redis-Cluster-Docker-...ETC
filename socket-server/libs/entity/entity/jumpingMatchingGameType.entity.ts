import { Column, Entity } from 'typeorm';

@Entity('jumpingmatchinggametype')
export class JumpingMatchingGameType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;
}
