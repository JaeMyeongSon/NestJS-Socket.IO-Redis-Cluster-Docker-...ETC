import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { OnfContentsType } from './onfContentsType.entity';

@Entity('onfContentsInfo')
export class OnfContentsInfo {
  @Column('int', { primary: true, name: 'onfContentsType' })
  onfContentsType: number;

  @Column('int', { name: 'isOn' })
  isOn: number;

  @ManyToOne(() => OnfContentsType, (onfContentsType) => onfContentsType.OnfContentsInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'onfContentsType', referencedColumnName: 'type' }])
  OnfContentsType: OnfContentsType;
}
