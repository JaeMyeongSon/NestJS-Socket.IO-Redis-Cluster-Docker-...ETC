import { Column, Entity, OneToMany } from 'typeorm';
import { PopupInfo } from './popupInfo.entity';

@Entity('popupType')
export class Popuptype {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => PopupInfo, (popupinfo) => popupinfo.Popuptype)
  PopupInfos: PopupInfo[];
}
