import { Column, Entity, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('roletype')
export class RoleType {
  @ApiProperty({
    example: '1',
    description: '관리자 권한 타입',
  })
  @Column('int', { primary: true, name: 'type' })
  type: number;
  @ApiProperty({
    example: '슈퍼 관리자',
    description: '관리자 권한 이름',
  })
  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => User, (user) => user.RoleType)
  Admins: User[];
}
