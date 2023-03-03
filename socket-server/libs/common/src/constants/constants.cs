public class ERRORCODE {
  public int NET_E_SUCCESS = 200; // 성공
  public int NET_E_NOT_LOGINED = 202; //로그인 되지 않음
  public int NET_E_EMPTY_TOKEN = 204; // 토큰이 비어있음
  public int NET_E_EXPIRED_TOKEN = 206; // 토큰 만료
  public int NET_E_INVALID_TOKEN = 208; // 유효하지 않은 토큰

  public int NET_E_IS_DORMANT_ACCOUNT = 240; // 휴면 계정 입니다
  public int NET_E_DUPLICATE_LOGIN = 242; // 중복 로그인
  public int NET_E_ALREADY_DELETE_USER_ID = 244; // 계정 탈퇴한 사용자 아이디
  public int NET_E_ALREADY_EXIST_EMAIL = 246; // 이미 존재하는 이메일
  public int NET_E_ALREADY_EXIST_NICKNAME = 248; // 이미 존재하는 닉네임
  public int NET_E_ALREADY_MY_NICKNAME = 249; // 이미 나의 닉네임
  public int NET_E_NOT_MATCH_PASSWORD = 250; // 패스워드 불일치
  public int NET_E_NOT_EXIST_USER = 252; // 존재하지 않는 사용자
  public int NET_E_NOT_MATCH_EMAIL_AUTH_CODE = 254; // 존재하지 않는 이메일 인증 코드
  public int NET_E_NOT_EXIST_EMAIL = 256; // 존재하지 않는 이메일
  public int NET_E_NOT_AUTH_EMAIL = 258; // 인증 되지 않은 이메일
  public int NET_E_ALREADY_EXIST_EMAIL_FOR_ARZMETA_LOGIN = 260; //이미 자체 로그인 가입 된 이메일 계정 사용자
  public int NET_E_EMPTY_PASSWORD = 262; // 패스워드가 없음.
  public int NET_E_CANNOT_UPDATED_EMAIL = 264; // 이메일 업데이트 불가 (1달에 1번)
  public int NET_E_SAME_PREVIOUS_EMAIL = 266; // 이메일이 변경 되지 않았음 (기존 이메일과 같다)
  public int NET_E_SOCIAL_LOGIN_USER = 268; // 소셜 로그인 사용자 입니다.
  public int NET_E_INVALID_EMAIL = 270; // 유효하지 않은 이메일 입니다.
  public int NET_E_OVER_COUNT_EMAIL_AUTH = 272; // 이메일 인증 횟수를 초과 하였습니다.
  public int NET_E_ALREADY_LINKED_ACCOUNT = 274; // 이미 연동된 계정 입니다.
  public int NET_E_CANNOT_RELEASE_LINKED_ACCOUNT = 276; // 계정 연동 해제 불가.

  public int NET_E_ALREADY_FRIEND = 302; // 이미 친구 입니다.
  public int NET_E_ALREADY_RECEIVED_FRIEND_REQUEST = 304; // 이미 친구 요청을 받았습니다.
  public int NET_E_ALREADY_SEND_FRIEND_REQUEST = 306; // 이미 친구 요청을 보냈습니다.
  public int NET_E_NOT_EXIST_RECEIVED_REQUEST = 308; // 받은 요청이 없습니다.
  public int NET_E_NOT_EXIST_REQUEST = 310; // 보낸 요청이 없습니다.
  public int NET_E_MEMBER_IS_BLOCK = 312; // 차단 된 사용자 입니다.

  public int NET_E_NOT_HAVE_ITEM = 340; // 소유하지 않은 아이템
  public int NET_E_ITEM_OVER_COUNT = 342; // 아이템 갯수 초과

  public int NET_E_NOT_SET_RESERVATION_TIME = 350; // 예약 시간 설정이 되지 않았습니다.
  public int NET_E_DUPLICATE_RESERVATION_TIME = 352; // 예약 시간 설정이 중복 되었습니다.
  public int NET_E_WRONG_RESERVATION_TIME = 354; // 예약 시간 설정이 잘못 되었습니다.
  public int NET_E_OFFICE_GRADE_AUTHORITY = 356; // 오피스 권한이 잘못되었습니다.
  public int NET_E_OVER_CREATE_OFFICE_RESERVATION_COUNT = 358; // 더 이상 룸을 예약 할 수 없습니다.
  public int NET_E_ERROR_SELECT_OFFICE_ROOM_INFO = 360; // 오피스 룸 선택 오류
  public int NET_E_OVER_MAX_PERSONNEL = 362; // 최대 인원 초과
  public int NET_E_OVER_RUNNING_TIME = 364; // 진행 시간 초과
  public int NET_E_CANNOT_SET_THUMBNAIL = 366; // 썸네일 설정 불가
  public int NET_E_CANNOT_SET_ADVERTISING = 368; // 홍보노출 설정 불가
  public int NET_E_CANNOT_SET_WAITING_ROOM = 370; // 대기실 설정 불가
  public int NET_E_NOT_EXIST_OFFICE = 372; // 존재 하지 않는 오피스
  public int NET_E_NOT_EXIST_WAITING = 374; // 존재 하지 않는 떆
  public int NET_E_OFFICE_CREATE_ME = 376; // 내가 만든 오피스

  public int NET_E_NOT_EXIST_NOTICE = 402; // 존재 하진 않는 공지사항 입니다.
  public int NET_E_BAD_PASSWORD = 404; // 잘못된 패스워드 형식 입니다.
  public int NET_E_CANNOT_VOTE = 426; // 투표 불가.
  public int NET_E_TOO_MANY_RESPONSE = 428; // 투표 응답 갯수가 너무 많습니다.
  public int NET_E_ALREADY_VOTE = 430; // 이미 투표를 했습니다.
  public int NET_E_WRONG_RESPONSE = 432; // 잘못된 응답입니다.
  public int NET_E_NOT_EXIST_VOTE = 434; // 존재하지 않는 투표입니다.
  public int NET_E_NOT_EXIST_PROGRESS_VOTE = 436; // 진행 중인 투표가 없습니다.

  public int NET_E_DB_FAILED = 600; // DB 실패
  public int NET_E_SERVER_INACTIVATE = 700; // 서버 비활성
  public int NET_E_NEED_UPDATE = 710; // 업데이트 필요
}

public class PROVIDER_TYPE {
  public int ARZMETA = 1;
  public int NAVER = 2;
  public int GOOGLE = 3;
  public int APPLE = 4;
  public int KAKAO = 5;
}

public class  SERVER_TYPE {
  public int DEV_SERVER = 1;
  public int STAGING_SERVER = 2;
  public int LIVE_SERVER = 3;
}

public class  SERVER_STATE {
   public int ACTIVATE = 1;
   public int INACTIVATE = 2;
   public int TEST = 3;
   public int NEED_UPDATE = 4;
}

public class  ROLE_TYPE {
   public int SYSTEM_ADMIN = 0;
   public int SUPER_ADMIN = 1;
   public int NORMAL_ADMIN = 2;
   public int UNAUTHORIZED = 3;
}

public class  VOTE_DIV_TYPE{
   public int ALTERNATIVE = 1;
   public int CHOICE = 2;
}

public class VOTE_ALTER_RES_TYPE{
   public int O_X = 1;
   public int YES_NO = 2;
}

public class  VOTE_RES_TYPE{
   public int SINGLE = 1;
   public int MULTIPLE = 2;
}

public class  VOTE_RESULT_TYPE{
   public int RATE = 1;
   public int COUNT = 2;
   public int MUTIPLE = 3;
}

public class  VOTE_STATE_TYPE{
   public int SCHEDULED = 1;
   public int PROGRESS = 2;
   public int COMPLETED = 3;
   public int END = 4;
}

public class  ITEM_TYPE{
   public int GENERAL = 1;
   public int INTERIOR = 2;
   public int COSTUME = 3;
}

public class  FRND_REQUEST_TYPE{
   public int MEMBER_CODE = 1;
   public int NICKNAME = 2;
}

