import { Column, Entity } from 'typeorm';

@Entity('voteanswertype')
export class Voteanswertype {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;
}
