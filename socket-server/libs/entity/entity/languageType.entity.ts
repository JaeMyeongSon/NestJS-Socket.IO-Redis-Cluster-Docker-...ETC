import { Column, Entity } from 'typeorm';

@Entity('languagetype')
export class LanguageType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;
}
