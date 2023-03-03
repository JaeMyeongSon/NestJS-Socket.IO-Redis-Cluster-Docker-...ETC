import { Column, Entity } from 'typeorm';

@Entity('officebookmark')
export class OfficeBookmark {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @Column('varchar', { name: 'thumbnail', length: 128 })
  thumbnail: string;

  @Column('varchar', { name: 'url', length: 256 })
  url: string;
}
