import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity('emaillimit')
export class EmailLimit {
  @Column('varchar', { primary: true, name: 'email', length: 64 })
  email: string;

  @Column('int', { name: 'count' })
  count: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
