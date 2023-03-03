import { SessionInfo } from '@lib/entity';
import { Injectable, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryRunner } from 'typeorm';
import { Decrypt, ERRORCODE, ERROR_MESSAGE } from '@lib/common';

@Injectable()
export class SessionService {
  constructor(@InjectRepository(SessionInfo) private sessionRepository: Repository<SessionInfo>) {}

  checkSession = async (_memberId: string, _sessionId: string) => {
    const memberId = String(_memberId);

    const sessionInfo = await this.sessionRepository.findOne({
      where: {
        memberId: memberId,
      },
    });

    const sessionId = String(Decrypt(_sessionId));

    if (sessionInfo) {
      if (sessionId !== sessionInfo.sessionId) {
        return ERRORCODE.NET_E_DUPLICATE_LOGIN;
      }
    } else {
      return ERRORCODE.NET_E_EMPTY_TOKEN;
    }

    return ERRORCODE.NET_E_SUCCESS;
  };
}
