import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { VideoScreenInfo } from './videoScreenInfo.entity';
import { WorldType } from './worldType.entity';

@Entity('areatype')
export class AreaType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => VideoScreenInfo, (videoscreeninfo) => videoscreeninfo.AreaType)
  VideoScreenInfos: VideoScreenInfo[];

  @ManyToMany(() => WorldType, (worldtype) => worldtype.AreaTypes)
  WorldTypes: WorldType[];
}
