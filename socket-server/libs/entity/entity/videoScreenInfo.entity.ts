import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { VideoPlayInfo } from './videoPlayInfo.entity';
import { AreaType } from './areaType.entity';
import { WorldType } from './worldType.entity';
import { VideoScreenStats } from './videoScreenStats.entity';

@Index('areaType', ['areaType'], {})
@Index('worldType', ['worldType'], {})
@Entity('videoscreeninfo')
export class VideoScreenInfo {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'worldType' })
  worldType: number;

  @Column('int', { name: 'areaType' })
  areaType: number;

  @Column('varchar', { name: 'screenName', length: 256 })
  screenName: string;

  @OneToOne(() => VideoPlayInfo, (videoplayinfo) => videoplayinfo.VideoScreenInfo)
  VideoPlayInfo: VideoPlayInfo;

  @ManyToOne(() => AreaType, (areatype) => areatype.VideoScreenInfos, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'areaType', referencedColumnName: 'type' }])
  AreaType: AreaType;

  @ManyToOne(() => WorldType, (worldtype) => worldtype.VideoScreenInfos, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'worldType', referencedColumnName: 'type' }])
  WorldType: WorldType;

  @OneToMany(() => VideoScreenStats, (videoscreenstats) => videoscreenstats.VideoScreenInfo)
  VideoScreenStats: VideoScreenStats[];
}
