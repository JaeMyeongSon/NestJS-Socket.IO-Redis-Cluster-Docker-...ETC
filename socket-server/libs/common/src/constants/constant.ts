export const ERRORCODE = Object.freeze({
  NET_E_SUCCESS: 200, // 성공
  NET_E_NOT_LOGINED: 202, //로그인 되지 않음
  NET_E_EMPTY_TOKEN: 204, // 토큰이 비어있음
  NET_E_EXPIRED_TOKEN: 206, // 토큰 만료
  NET_E_INVALID_TOKEN: 208, // 유효하지 않은 토큰

  NET_E_IS_DORMANT_ACCOUNT: 240, // 휴면 계정 입니다
  NET_E_DUPLICATE_LOGIN: 242, // 중복 로그인
  NET_E_ALREADY_DELETE_USER_ID: 244, // 계정 탈퇴한 사용자 아이디
  NET_E_ALREADY_EXIST_EMAIL: 246, // 이미 존재하는 이메일
  NET_E_ALREADY_EXIST_NICKNAME: 248, // 이미 존재하는 닉네임
  NET_E_ALREADY_MY_NICKNAME: 249, // 이미 나의 닉네임
  NET_E_NOT_MATCH_PASSWORD: 250, // 패스워드 불일치
  NET_E_NOT_EXIST_USER: 252, // 존재하지 않는 사용자
  NET_E_NOT_MATCH_EMAIL_AUTH_CODE: 254, // 존재하지 않는 이메일 인증 코드
  NET_E_NOT_EXIST_EMAIL: 256, // 존재하지 않는 이메일
  NET_E_NOT_AUTH_EMAIL: 258, // 인증 되지 않은 이메일
  NET_E_ALREADY_EXIST_EMAIL_FOR_ARZMETA_LOGIN: 260, //이미 자체 로그인 가입 된 이메일 계정 사용자
  NET_E_EMPTY_PASSWORD: 262, // 패스워드가 없음.
  NET_E_CANNOT_UPDATED_EMAIL: 264, // 이메일 업데이트 불가 (1달에 1번)
  NET_E_SAME_PREVIOUS_EMAIL: 266, // 이메일이 변경 되지 않았음 (기존 이메일과 같다)
  NET_E_SOCIAL_LOGIN_USER: 268, // 소셜 로그인 사용자 입니다.
  NET_E_INVALID_EMAIL: 270, // 유효하지 않은 이메일 입니다.
  NET_E_OVER_COUNT_EMAIL_AUTH: 272, // 이메일 인증 횟수를 초과 하였습니다.
  NET_E_ALREADY_LINKED_ACCOUNT: 274, // 이미 연동된 계정 입니다.
  NET_E_CANNOT_RELEASE_LINKED_ACCOUNT: 276, // 계정 연동 해제 불가.
  NET_E_MAX_OVER_BUSINESS_CARD: 278, // 비지니스 명함 갯수 초과
  NET_E_NOT_EXIST_BUSINESS_CARD: 278, // 존재하지 않는 비지니스 명함
  NET_E_ERROR_BUSINESS_CARD_ID: 280, // 비지니스 명함 아이디 에러

  NET_E_ALREADY_FRIEND: 302, // 이미 친구 입니다.
  NET_E_ALREADY_RECEIVED_FRIEND_REQUEST: 304, // 이미 친구 요청을 받았습니다.
  NET_E_ALREADY_SEND_FRIEND_REQUEST: 306, // 이미 친구 요청을 보냈습니다.
  NET_E_NOT_EXIST_RECEIVED_REQUEST: 308, // 받은 요청이 없습니다.
  NET_E_NOT_EXIST_REQUEST: 310, // 보낸 요청이 없습니다.
  NET_E_MEMBER_IS_BLOCK: 312, // 차단 된 사용자 입니다.

  NET_E_NOT_HAVE_ITEM: 340, // 소유하지 않은 아이템
  NET_E_ITEM_OVER_COUNT: 342, // 아이템 갯수 초과
  NET_E_NOT_MATCH_ITEM: 344, // 아이템이 일치 하지 않습니다.
  NET_E_ITEM_NOT_REMOVABLE: 346, // 아이템을 배치 해제 할 수 없다.

  NET_E_NOT_SET_RESERVATION_TIME: 350, // 예약 시간 설정이 되지 않았습니다.
  NET_E_DUPLICATE_RESERVATION_TIME: 352, // 예약 시간 설정이 중복 되었습니다.
  NET_E_WRONG_RESERVATION_TIME: 354, // 예약 시간 설정이 잘못 되었습니다.
  NET_E_OFFICE_GRADE_AUTHORITY: 356, // 오피스 권한이 잘못되었습니다.
  NET_E_OVER_CREATE_OFFICE_RESERVATION_COUNT: 358, // 더 이상 룸을 예약 할 수 없습니다.
  NET_E_ERROR_SELECT_OFFICE_ROOM_INFO: 360, // 오피스 룸 선택 오류
  NET_E_OVER_MAX_PERSONNEL: 362, // 최대 인원 초과
  NET_E_OVER_RUNNING_TIME: 364, // 진행 시간 초과
  NET_E_CANNOT_SET_THUMBNAIL: 366, // 썸네일 설정 불가
  NET_E_CANNOT_SET_ADVERTISING: 368, // 홍보노출 설정 불가
  NET_E_CANNOT_SET_WAITING_ROOM: 370, // 대기실 설정 불가
  NET_E_NOT_EXIST_OFFICE: 372, // 존재 하지 않는 오피스
  NET_E_NOT_EXIST_WAITING: 374, // 존재 하지 않는 대기실
  NET_E_OFFICE_CREATE_ME: 376, // 내가 만든 오피스
  NET_E_CANNOT_OFFICE_SET_OBSERVER: 378, // 관전 인원 설정 불가
  NET_E_OVER_MAX_OFFICE_SET_OBSERVER: 380, // 관전 인원 설정 초과
  NET_E_OFFICE_ALREADY_WAITING_USER: 386, // 이미 대기중인 사용자 입니다.

  NET_E_NOT_EXIST_NOTICE: 402, // 존재 하진 않는 공지사항 입니다.
  NET_E_BAD_PASSWORD: 404, // 잘못된 패스워드 형식 입니다.
  NET_E_CANNOT_VOTE: 426, // 투표 불가.
  NET_E_TOO_MANY_RESPONSE: 428, // 투표 응답 갯수가 너무 많습니다.
  NET_E_ALREADY_VOTE: 430, // 이미 투표를 했습니다.
  NET_E_WRONG_RESPONSE: 432, // 잘못된 응답입니다.
  NET_E_NOT_EXIST_VOTE: 434, // 존재하지 않는 투표입니다.
  NET_E_NOT_EXIST_PROGRESS_VOTE: 436, // 진행 중인 투표가 없습니다.

  NET_E_DB_FAILED: 600, // DB 실패
  NET_E_SERVER_INACTIVATE: 700, // 서버 비활성
  NET_E_NEED_UPDATE: 710, // 업데이트 필요
});

export const PROVIDER_TYPE = Object.freeze({
  ARZMETA: 1,
  NAVER: 2,
  GOOGLE: 3,
  APPLE: 4,
  KAKAO: 5,
});

export const SERVER_TYPE = Object.freeze({
  DEV_SERVER: 1,
  STAGING_SERVER: 2,
  LIVE_SERVER: 3,
});

export const SERVER_STATE = Object.freeze({
  ACTIVATE: 1,
  INACTIVATE: 2,
  TEST: 3,
  NEED_UPDATE: 4,
});

export const ADMIN_PAGE = Object.freeze({
  LIST_PAGE_COUNT: 10,
});

export const ROLE_TYPE = Object.freeze({
  SYSTEM_ADMIN: 0,
  SUPER_ADMIN: 1,
  MIDDLE_ADMIN: 2,
  DEV_ADMIN: 3,
  NORMAL_ADMIN: 4,
  UNAUTHORIZED: 5,
});

export const VOTE_DIV_TYPE = Object.freeze({
  ALTERNATIVE: 1,
  CHOICE: 2,
});

export const VOTE_ALTER_RES_TYPE = Object.freeze({
  O_X: 1,
  YES_NO: 2,
});

export const VOTE_RES_TYPE = Object.freeze({
  SINGLE: 1,
  MULTIPLE: 2,
});

export const VOTE_RESULT_TYPE = Object.freeze({
  RATE: 1,
  COUNT: 2,
  MUTIPLE: 3,
});

export const VOTE_STATE_TYPE = Object.freeze({
  SCHEDULED: 1,
  PROGRESS: 2,
  COMPLETED: 3,
  END: 4,
});

export const SEARCH_TYPE = Object.freeze({
  ALL: 'ALL',
  NAME: 'NAME',
  NICKNAME: 'NICKNAME',
  PHONENUMBER: 'PHONENUMBER',
  PROVIDER_TYPE: 'PROVIDER_TYPE',
  EMAIL: 'EMAIL',
  ACCOUNT_TOKEN: 'ACCOUNT_TOKEN',
  COUNTRY_CODE: 'COUNTRY_CODE',
  CREATED_AT: 'CREATED_AT',
  STATE_TYPE: 'STATE_TYPE',
  ROLE_TYPE: 'ROLE_TYPE',
  DEPARTMENT_TYPE: 'DEPARTMENT_TYPE',
  LOGINED_AT: 'LOGINED_AT',
  SUBJECT: 'SUBJECT',
  STARTED_AT: 'STARTED_AT',
  ENDED_AT: 'ENDED_AT',
  CONTENT: 'CONTENT',
  NEWS_TYPE: 'NEWS_TYPE',
  STATE_NAME: 'STATE_NAME',
  CONTENT_TYPE: 'CONTENT_TYPE',
  ACTION_TYPE: 'ACTION_TYPE',
  OS_TYPE: 'OS_TYPE',
  DIV_TYPE: 'DIV_TYPE',
  RES_TYPE: 'RES_TYPE',
  ALTER_RES_TYPE: 'ALTER_RES_TYPE',
  RESULT_TYPE: 'RESULT_TYPE',
  MEMBER_CODE: 'MEMBER_CODE',
  OFFICE_GRADE_TYPE: 'OFFICE_GRADE_TYPE',
  TOTAL: 'TOTAL',
  INQUIRY_TYPE: 'INQUIRY_TYPE', // 문의 타입
  REPORT_TYPE: 'REPORT_TYPE', // 신고 유형
  REASON_TYPE: 'REASON_TYPE', // 신고 상세 사유
});

export const ITEM_TYPE = Object.freeze({
  GENERAL: 1,
  INTERIOR: 2,
  COSTUME: 3,
});

export const FRND_REQUEST_TYPE = Object.freeze({
  MEMBER_CODE: 1,
  NICKNAME: 2,
});

export const BUSINISS_CARD_TYPE = Object.freeze({
  ARZMETA: 1,
  BUSINESS_1: 2,
});

export const INQUIRY_TYPE = Object.freeze({
  SERVICE_USE: 1,
  ACCOUNT: 2,
  PURCHASE: 3,
  PARTNERSHIP: 4,
  SUGGESTIONS: 5,
  ETC: 6,
});

export const INQUIRY_ANSWER_TYPE = Object.freeze({
  WAITING: 1,
  COMPLETE: 2,
  HOLD: 3,
  RESERV: 4,
});

export const REPORT_STATE_TYPE = Object.freeze({
  RECEIPT: 1,
  CONFIRM_COMPLETE: 2,
  REQUEST_RESTRICTION: 3,
  RESTRICTION_COMPLETE: 4,
});

export const BOOLEAN = Object.freeze({
  TRUE: 1,
  FALSE: 0,
});

export const stringState = (str: any) => {
  if (str === undefined || str === 'undefined' || str === null || str === '') {
    return false;
  }

  return true;
};

export const randomString = (num: number) => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ';
  const stringLength = num;
  let randomstring = '';
  for (let i = 0; i < stringLength; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
};

export const getOnfContentsInfo = async () => {
  // try {
  //   return await OnfContentsInfo.findAll({});
  // } catch (err) {
  //   console.error(err);
  //   return err;
  // }
};
