import { Column, Entity } from 'typeorm';

@Entity('forbiddenwords')
export class Forbiddenwords {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('text', { name: 'text' })
  text: string;
}
