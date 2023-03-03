import { Column, Entity, OneToMany } from 'typeorm';
import { VideoPlayInfo } from './videoPlayInfo.entity';

@Entity('videostatetype')
export class VideoStateType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => VideoPlayInfo, (videoplayinfo) => videoplayinfo.VideoStateType)
  VideoPlayInfos: VideoPlayInfo[];
}
