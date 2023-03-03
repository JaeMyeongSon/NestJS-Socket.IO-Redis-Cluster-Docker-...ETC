import { Column, Entity, OneToMany } from 'typeorm';
import { InteriorInstallInfo } from './interiorInstallInfo.entity';
import { MemberMyRoomInfo } from './memberMyRoomInfo.entity';
import { StartMyRoom } from './startMyRoom.entity';

@Entity('layertype')
export class LayerType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => InteriorInstallInfo, (interiorinstallinfo) => interiorinstallinfo.LayerType)
  InteriorInstallInfos: InteriorInstallInfo[];

  @OneToMany(() => MemberMyRoomInfo, (membermyroominfo) => membermyroominfo.LayerType)
  MemberMyRoomInfos: MemberMyRoomInfo[];

  @OneToMany(() => StartMyRoom, (startmyroom) => startmyroom.LayerType)
  StartMyRooms: StartMyRoom[];
}
