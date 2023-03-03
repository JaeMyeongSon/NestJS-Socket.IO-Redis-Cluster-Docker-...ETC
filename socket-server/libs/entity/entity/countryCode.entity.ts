import { Column, Entity } from 'typeorm';

@Entity('countrycode')
export class CountryCode {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'nameId', length: 64 })
  nameId: string;

  @Column('int', { name: 'code' })
  code: number;
}
