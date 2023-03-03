import { MemberDefaultCardInfo } from './../../entity/entity/memberDefaultCardInfo.entity';
import {
  Member,
  MemberAccount,
  MemberAvatarInfo,
  MemberInteriorItemInven,
  MemberAvatarPartsItemInven,
  MemberMyRoomInfo,
  OnfContentsInfo,
  StartInventory,
  StartMyRoom,
  MemberBusinessCardInfo,
} from '@lib/entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { ITEM_TYPE } from './constants/constant';

@Injectable()
export class CommonService {
  constructor(
    @InjectRepository(Member) private memberRepository: Repository<Member>,
    @InjectRepository(MemberAccount) private memberAccountRepository: Repository<MemberAccount>,
    @InjectRepository(MemberInteriorItemInven)
    private memberInteriorItemInvenRepository: Repository<MemberInteriorItemInven>,
    @InjectRepository(MemberAvatarPartsItemInven)
    private memberAvatarPartsItemInvenRepository: Repository<MemberAvatarPartsItemInven>,
    @InjectRepository(StartInventory) private startInventory: Repository<StartInventory>,
    @InjectRepository(MemberMyRoomInfo) private memberMyRoomInfoRepository: Repository<MemberMyRoomInfo>,
    @InjectRepository(StartMyRoom) private startMyRoomRepository: Repository<StartMyRoom>,
    @Inject(DataSource) private dataSource,
  ) {}

  async GetAvatarInfo(member: Member) {
    try {
      const avatarInfo = await this.dataSource.getRepository(MemberAvatarInfo).find({
        where: {
          memberId: member.memberId,
        },
      });

      let avatarList: any = {};
      for (const avatar of avatarInfo) {
        avatarList[avatar.avatarPartsType] = avatar.itemId;
      }
      return avatarList;
    } catch (err) {
      console.error(err);
    }
  }

  GetMyRoomInfo = async (memberId: string) => {
    try {
      const myRoomInfos = await this.dataSource.getRepository(MemberMyRoomInfo).find({
        select: {
          itemId: true,
          layerType: true,
          x: true,
          y: true,
          rotation: true,
        },
        where: {
          memberId: memberId,
        },
      });

      return myRoomInfos;
    } catch (err) {
      console.error(err);
    }
  };

  async GetInteriorItemInven(memberId: string) {
    try {
      const interiorItemInvens = await this.memberInteriorItemInvenRepository.find({
        select: { itemId: true, count: true },
        where: {
          memberId: memberId,
        },
      });

      return interiorItemInvens;
    } catch (err) {
      console.error(err);
    }
  }

  // 아바타 인벤토리
  async GetAvatarPartsItemInven(memberId: string) {
    try {
      const avatarPartsItemInvens = await this.memberAvatarPartsItemInvenRepository.find({
        select: { itemId: true },
        where: {
          memberId: memberId,
        },
      });

      return avatarPartsItemInvens;
    } catch (err) {
      console.error(err);
    }
  }

  async CreateMemberAvatarPartsInventoryInit(memberId: string, queryRunner: QueryRunner) {
    // 기본 아바타 인벤토리 설정
    const memberAvatarPartsItemInven = await this.memberAvatarPartsItemInvenRepository.find({
      where: {
        memberId: memberId,
      },
    });

    if (memberAvatarPartsItemInven.length === 0) {
      const avatarPartsItems = await this.dataSource
        .getRepository(StartInventory)
        .createQueryBuilder('startInventory')
        .innerJoinAndSelect('startInventory.Item', 'item')
        .where('Item.itemType = :itemType', { itemType: ITEM_TYPE.COSTUME })
        .getMany();

      for (let index = 0; index < avatarPartsItems.length; index++) {
        const item = avatarPartsItems[index];

        const memberAvatarPartsItemInven = new MemberAvatarPartsItemInven();
        memberAvatarPartsItemInven.memberId = memberId;
        memberAvatarPartsItemInven.itemId = item.itemId;

        await queryRunner.manager.getRepository(MemberAvatarPartsItemInven).save(memberAvatarPartsItemInven);
      }
    }
  }

  async CreateMemberInteriorInventoryInit(memberId: string, queryRunner: QueryRunner) {
    // 기본 인벤토리 설정 ( 인테리어)
    const memberInteriorItemInven = await this.memberInteriorItemInvenRepository.find({
      where: {
        memberId: memberId,
      },
    });

    if (memberInteriorItemInven.length === 0) {
      const interiorItems = await this.dataSource
        .getRepository(StartInventory)
        .createQueryBuilder('startInventory')
        .innerJoinAndSelect('startInventory.Item', 'item')
        .where('Item.itemType = :itemType', { itemType: ITEM_TYPE.INTERIOR })
        .getMany();

      for (let index = 0; index < interiorItems.length; index++) {
        const item = interiorItems[index];

        const memberInteriorItemInven = new MemberInteriorItemInven();
        memberInteriorItemInven.memberId = memberId;
        memberInteriorItemInven.itemId = item.itemId;
        memberInteriorItemInven.count = item.count;
        memberInteriorItemInven.useCount = 0;

        await queryRunner.manager.getRepository(MemberInteriorItemInven).save(memberInteriorItemInven);
      }
    }
  }

  async CreateMemberInteriorInit(memberId: string, queryRunner: QueryRunner) {
    const memberMyRoomInfo = await this.dataSource.getRepository(MemberMyRoomInfo).find({
      where: {
        memberId: memberId,
      },
    });

    if (memberMyRoomInfo.length === 0) {
      const defaultMyRoomItems = await this.dataSource.getRepository(StartMyRoom).find({});

      for (let index = 0; index < defaultMyRoomItems.length; index++) {
        const item = defaultMyRoomItems[index];

        const myRoomInfo = new MemberMyRoomInfo();
        myRoomInfo.memberId = memberId;
        myRoomInfo.itemId = item.itemId;
        myRoomInfo.layerType = item.layerType;
        myRoomInfo.x = item.x;
        myRoomInfo.y = item.y;
        myRoomInfo.rotation = item.rotation;

        await queryRunner.manager.getRepository(MemberMyRoomInfo).save(myRoomInfo);
      }
    }
  }

  async GetBusinessCardList(memberId: string) {
    const businessCardInfos = await this.dataSource
      .getRepository(MemberBusinessCardInfo)
      .createQueryBuilder('b')
      .select([
        'b.templateId',
        'b.num',
        'b.name',
        'b.phone',
        'b.email',
        'b.addr',
        'b.fax',
        'b.job',
        'b.position',
        'b.intro',
        'b.thumbnail',
      ])
      .where('b.memberId= :memberId', { memberId })
      .getMany();

    return businessCardInfos;
  }

  async GetDefaultCardInfo(memberId: string) {
    const defaultCardInfo = await this.dataSource.getRepository(MemberDefaultCardInfo).find({
      select: ['templateId', 'num'],
      where: {
        memberId: memberId,
      },
    });
    return defaultCardInfo;
  }

  async GetOnfContentsInfo() {
    return await this.dataSource.getRepository(OnfContentsInfo).find();
  }

  async GnenerateMemberCode() {
    // 유저코드 발급
    let memberCode = '';
    while (true) {
      memberCode = await this.randomString(12);

      const exMemberCode = await this.memberRepository.findOne({
        where: {
          memberCode: memberCode,
        },
      });

      if (!exMemberCode) {
        return memberCode;
      }
    }
  }

  randomString = (num: number) => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ';
    const stringLength = num;
    let randomstring = '';
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  };

  // 이미지 처리
  getImageName = (name: string) => {
    const extension = name.split('.').pop();
    const filaName = uuid() + '.' + extension;
    return filaName;
  };
}
