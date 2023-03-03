import { OnfContentsInfo } from './onfContentsInfo.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

@Entity('onfContentsType')
export class OnfContentsType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => OnfContentsInfo, (onfContentsInfo) => onfContentsInfo.OnfContentsType)
  OnfContentsInfos: OnfContentsInfo[];
}
