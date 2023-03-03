import { BusinessCardTemplate } from '../entity/businessCardTemplate.entity';
import { OfficeRoomCodeLog } from './../entity/officeRoomCodeLog.entity';
import { OfficeGradeAuthority } from './../entity/officeGradeAuthority.entity';
import { AdminLog } from '../entity/adminLog.entity';
import { AreaType } from '../entity/areaType.entity';
import { AvatarParts } from '../entity/avatarParts.entity';
import { AvatarPartsColorType } from '../entity/avatarPartsColorType.entity';
import { AvatarPartsDivisionType } from '../entity/avatarPartsDivisionType.entity';
import { AvatarPartsGroupType } from '../entity/avatarPartsGroupType.entity';
import { AvatarPartsSizeType } from '../entity/avatarPartsSizeType.entity';
import { AvatarPartsStateType } from '../entity/avatarPartsStateType.entity';
import { AvatarPartsType } from '../entity/avatarPartsType.entity';
import { AvatarPreset } from '../entity/avatarPreset.entity';
import { AvatarPresetType } from '../entity/avatarPresetType.entity';
import { AvatarResetInfo } from '../entity/avatarResetInfo.entity';
import { BlockMember } from '../entity/blockMember.entity';
import { BooleanType } from '../entity/booleanType.entity';
import { CategoryType } from '../entity/categoryType.entity';
import { CommerceZoneMannequin } from '../entity/commerceZoneMannequin.entity';
import { CountryCode } from '../entity/countryCode.entity';
import { DepartmentType } from '../entity/departmentType.entity';
import { EmailCheck } from '../entity/emailCheck.entity';
import { EmailConfirm } from '../entity/emailConfirm.entity';
import { EmailLimit } from '../entity/emailLimit.entity';
import { EnabledType } from '../entity/enabledType.entity';
import { Faq } from '../entity/faq.entity';
import { Forbiddenwords } from '../entity/forbiddenwords.entity';
import { FriendRequest } from '../entity/friendRequest.entity';
import { Gateway } from '../entity/gateway.entity';
import { GradeType } from '../entity/gradeType.entity';
import { InfiniteCodeRank } from '../entity/infiniteCodeRank.entity';
import { InteriorInstallInfo } from '../entity/interiorInstallInfo.entity';
import { InventoryCapacity } from '../entity/inventoryCapacity.entity';
import { InquiryTemplate } from '../entity/inquiryTemplate.entity';
import { InquiryAnswerType } from '../entity/inquiryAnswerType.entity';
import { InquiryType } from '../entity/inquiryType.entity';
import { Item } from '../entity/item.entity';
import { ItemType } from '../entity/itemType.entity';
import { JumpingMatchingGameType } from '../entity/jumpingMatchingGameType.entity';
import { JumpingMatchingLevel } from '../entity/jumpingMatchingLevel.entity';
import { LanguageType } from '../entity/languageType.entity';
import { LayerType } from '../entity/layerType.entity';
import { Localization } from '../entity/localization.entity';
import { LogActionType } from '../entity/logActionType.entity';
import { LogContentType } from '../entity/logContentType.entity';
import { MannequinModelType } from '../entity/mannequinModelType.entity';
import { MannequinPurchaseState } from '../entity/mannequinPurchaseState.entity';
import { Member } from '../entity/member.entity';
import { MemberAccount } from '../entity/memberAccount.entity';
import { MemberAvatarInfo } from '../entity/memberAvatarInfo.entity';
import { MemberBusinessCardInfo } from '../entity/memberBusinessCardInfo.entity';
import { MemberDefaultCardInfo } from '../entity/memberDefaultCardInfo.entity';
import { MemberFriend } from '../entity/memberFriend.entity';
import { MemberInfiniteCodeRank } from '../entity/memberInfiniteCodeRank.entity';
import { MemberInteriorItemInven } from '../entity/memberInteriorItemInven.entity';
import { MemberInquiry } from '../entity/memberInquiry.entity';
import { MemberInquiryAnswer } from '../entity/memberInquiryAnswer.entity';
import { MemberInquiryManager } from '../entity/memberInquiryManager.entity';
import { MemberInquiryGroup } from '../entity/memberInquiryGroup.entity';
import { MemberAvatarPartsItemInven } from '../entity/memberAvatarPartsItemInven.entity';
import { MemberItemInven } from '../entity/memberItemInven.entity';
import { MemberLoginLog } from '../entity/memberLoginLog.entity';
import { MemberMyRoomInfo } from '../entity/memberMyRoomInfo.entity';
import { MemberNicknameLog } from '../entity/memberNicknameLog.entity';
import { MemberReportInfo } from '../entity/memberReportInfo.entity';
import { MemberVoteInfo } from '../entity/memberVoteInfo.entity';
import { News } from '../entity/news.entity';
import { NewsType } from '../entity/newsType.entity';
import { NewsViews } from '../entity/newsViews.entity';
import { Npc } from '../entity/npc.entity';
import { NpcMapPositionType } from '../entity/npcMapPositionType.entity';
import { NpcSeq } from '../entity/npcSeq.entity';
import { NpcSeqAct } from '../entity/npcSeqAct.entity';
import { OfficeAuthority } from '../entity/officeAuthority.entity';
import { OfficeBookmark } from '../entity/officeBookmark.entity';
import { OfficeDefaultOption } from '../entity/officeDefaultOption.entity';
import { OfficeExposure } from '../entity/officeExposure.entity';
import { OfficeExposureType } from '../entity/officeExposureType.entity';
import { OfficeGradeType } from '../entity/officeGradeType.entity';
import { OfficeMode } from '../entity/officeMode.entity';
import { OfficeModeType } from '../entity/officeModeType.entity';
import { OfficePermissionType } from '../entity/officePermissionType.entity';
import { OfficeProductItem } from '../entity/officeProductItem.entity';
import { OfficeSpaceInfo } from '../entity/officeSpaceInfo.entity';
import { OfficeSpawnType } from '../entity/officeSpawnType.entity';
import { OfficeTopicType } from '../entity/officeTopicType.entity';
import { OnfContentsType } from '../entity/onfContentsType.entity';
import { OnfContentsInfo } from '../entity/onfContentsInfo.entity';
import { OsType } from '../entity/osType.entity';
import { PackageType } from '../entity/packageType.entity';
import { PaymentType } from '../entity/paymentType.entity';
import { PopupInfo } from '../entity/popupInfo.entity';
import { Popuptype } from '../entity/popupType.entity';
import { ProviderType } from '../entity/providerType.entity';
import { PurchaseType } from '../entity/purchaseType.entity';
import { QuizAnswerType } from '../entity/quizAnswerType.entity';
import { QuizLevel } from '../entity/quizLevel.entity';
import { QuizQuestionAnswer } from '../entity/quizQuestionAnswer.entity';
import { QuizRoundTime } from '../entity/quizRoundTime.entity';
import { QuizTimeType } from '../entity/quizTimeType.entity';
import { ReportType } from '../entity/reportType.entity';
import { ReportCategory } from '../entity/reportCategory.entity';
import { ReportReasonType } from '../entity/reportReasonType.entity';
import { ReportStateType } from '../entity/reportStateType.entity';
import { ResignMember } from '../entity/resignMember.entity';
import { ResignPurchaseInfo } from '../entity/resignPurchaseInfo.entity';
import { RoleType } from '../entity/roleType.entity';
import { SaleType } from '../entity/saleType.entity';
import { ServerInfo } from '../entity/serverInfo.entity';
import { ServerState } from '../entity/serverState.entity';
import { ServerType } from '../entity/serverType.entity';
import { SessionInfo } from '../entity/sessionInfo.entity';
import { StartInventory } from '../entity/startInventory.entity';
import { StartMyRoom } from '../entity/startMyRoom.entity';
import { StateMessage } from '../entity/stateMessage.entity';
import { Terms } from '../entity/terms.entity';
import { TestMember } from '../entity/testMember.entity';
import { TopBillboardPopupInfo } from '../entity/topBillboardPopupInfo.entity';
import { User } from '../entity/user.entity';
import { VideoPlayInfo } from '../entity/videoPlayInfo.entity';
import { VideoScreenInfo } from '../entity/videoScreenInfo.entity';
import { VideoScreenStats } from '../entity/videoScreenStats.entity';
import { VideoStateType } from '../entity/videoStateType.entity';
import { VoteAlterResponse } from '../entity/voteAlterResponse.entity';
import { VoteAlterResType } from '../entity/voteAlterResType.entity';
import { Voteanswertype } from '../entity/voteAnswerType.entity';
import { VoteDivType } from '../entity/voteDivType.entity';
import { VoteInfo } from '../entity/voteInfo.entity';
import { VoteInfoExample } from '../entity/voteInfoExample.entity';
import { VoteResType } from '../entity/voteResType.entity';
import { VoteResultType } from '../entity/voteResultType.entity';
import { VoteStateType } from '../entity/voteStateType.entity';
import { WorldType } from '../entity/worldType.entity';
import { Module } from '@nestjs/common';
import { entityProviders } from './entity.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MemberOfficeReservationInfo } from '../entity/memberOfficeReservationInfo.entity';
import { MemberOfficeReservationWaitingInfo } from '../entity/memberOfficeReservationWaitingInfo.entity';
import { OfficeAlarmType } from '../entity/officeAlarmType.entity';
import { OfficeModeSlot } from '../entity/officeModeSlot.entity';
import { ItemUseEffect } from '../entity/itemUseEffect.entity';
import { CommerceZoneItem } from '../entity/commerceZoneItem.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: process.env.DB_HOSTNAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        AdminLog,
        AreaType,
        AvatarParts,
        AvatarPartsColorType,
        AvatarPartsDivisionType,
        AvatarPartsGroupType,
        AvatarPartsSizeType,
        AvatarPartsStateType,
        AvatarPartsType,
        AvatarPreset,
        AvatarPresetType,
        AvatarResetInfo,
        BlockMember,
        BooleanType,
        BusinessCardTemplate,
        CategoryType,
        CommerceZoneMannequin,
        CommerceZoneItem,
        CountryCode,
        DepartmentType,
        EmailCheck,
        EmailConfirm,
        EmailLimit,
        EnabledType,
        Faq,
        Forbiddenwords,
        FriendRequest,
        Gateway,
        GradeType,
        InfiniteCodeRank,
        InteriorInstallInfo,
        InventoryCapacity,
        InquiryTemplate,
        InquiryAnswerType,
        InquiryType,
        Item,
        ItemType,
        ItemUseEffect,
        JumpingMatchingGameType,
        JumpingMatchingLevel,
        LanguageType,
        LayerType,
        Localization,
        LogActionType,
        LogContentType,
        MannequinModelType,
        MannequinPurchaseState,
        Member,
        MemberAccount,
        MemberAvatarInfo,
        MemberBusinessCardInfo,
        MemberDefaultCardInfo,
        MemberFriend,
        MemberInfiniteCodeRank,
        MemberInteriorItemInven,
        MemberInquiry,
        MemberInquiryAnswer,
        MemberInquiryManager,
        MemberInquiryGroup,
        MemberAvatarPartsItemInven,
        MemberItemInven,
        MemberLoginLog,
        MemberNicknameLog,
        MemberMyRoomInfo,
        MemberOfficeReservationInfo,
        MemberOfficeReservationWaitingInfo,
        MemberReportInfo,
        MemberVoteInfo,
        News,
        NewsType,
        NewsViews,
        Npc,
        NpcMapPositionType,
        NpcSeq,
        NpcSeqAct,
        OfficeAlarmType,
        OfficeAuthority,
        OfficeBookmark,
        OfficeDefaultOption,
        OfficeExposure,
        OfficeExposureType,
        OfficeGradeAuthority,
        OfficeGradeType,
        OfficeMode,
        OfficeModeSlot,
        OfficeModeType,
        OfficePermissionType,
        OfficeProductItem,
        OfficeRoomCodeLog,
        OfficeSpaceInfo,
        OfficeSpawnType,
        OfficeTopicType,
        OnfContentsInfo,
        OnfContentsType,
        OsType,
        PackageType,
        PaymentType,
        PopupInfo,
        Popuptype,
        ProviderType,
        PurchaseType,
        QuizAnswerType,
        QuizLevel,
        QuizQuestionAnswer,
        QuizRoundTime,
        QuizTimeType,
        ReportType,
        ReportCategory,
        ReportReasonType,
        ReportStateType,
        ResignMember,
        ResignPurchaseInfo,
        RoleType,
        SaleType,
        ServerInfo,
        ServerState,
        ServerType,
        SessionInfo,
        StartInventory,
        StartMyRoom,
        StateMessage,
        Terms,
        TestMember,
        TopBillboardPopupInfo,
        User,
        VideoPlayInfo,
        VideoScreenInfo,
        VideoScreenStats,
        VideoStateType,
        VoteAlterResponse,
        VoteAlterResType,
        Voteanswertype,
        VoteDivType,
        VoteInfo,
        VoteInfoExample,
        VoteResType,
        VoteResultType,
        VoteStateType,
        WorldType,
      ],
      synchronize: false,
      logging: true,
      ssl: {
        rejectUnauthorized: true,
      },
    }),
  ],
  providers: [...entityProviders],
  exports: [...entityProviders],
})
export class EntityModule {}
