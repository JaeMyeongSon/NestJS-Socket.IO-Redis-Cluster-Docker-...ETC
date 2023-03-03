import { JsonWebTokenError, NotBeforeError, TokenExpiredError, Jwt, JwtPayload } from 'jsonwebtoken';
import { JwtService } from './jwt.service';
import { ExecutionContext, Inject, Injectable, CanActivate, HttpException, HttpStatus } from '@nestjs/common';
import { ERRORCODE } from '../constants/constant';
import { Decrypt } from '../utils/crypter';
import { SessionService } from './session.service';
import { ERROR_MESSAGE } from '../constants/errorMessage';

type Member = {
  idx: string;
  iat: number;
  exp: number;
};

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    @Inject(JwtService) private readonly jwtService: JwtService,
    @Inject(SessionService) private readonly sessionService: SessionService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const body = request.headers;

    try {
      const decryptToken = String(Decrypt(body.jwtaccesstoken));
      console.log(decryptToken);

      const jwtToken: Member | Jwt | JwtPayload | string | number = await this.jwtService.verifyToken(decryptToken);
      const member = jwtToken as Member;
      console.log('jwtAcessToken : ', jwtToken);
      console.log('jwtAcessToken to Member', member);

      context.switchToHttp().getRequest().body.memberId = member.idx;
      context.switchToHttp().getRequest().headers.memberId = member.idx;

      try {
        const sessionInfo = await this.sessionService.checkSession(member.idx, body.sessionid);
        if (sessionInfo === ERRORCODE.NET_E_DUPLICATE_LOGIN) {
          throw new HttpException(
            {
              error: ERRORCODE.NET_E_DUPLICATE_LOGIN,
              message: ERROR_MESSAGE(ERRORCODE.NET_E_DUPLICATE_LOGIN),
            },
            HttpStatus.FORBIDDEN,
          );
        } else if (sessionInfo === ERRORCODE.NET_E_EMPTY_TOKEN) {
          throw new HttpException(
            {
              error: ERRORCODE.NET_E_EMPTY_TOKEN,
              message: ERROR_MESSAGE(ERRORCODE.NET_E_EMPTY_TOKEN),
            },
            HttpStatus.FORBIDDEN,
          );
        }
      } catch (error) {
        console.log('memberId : ', member.idx);
        throw new HttpException(
          {
            error: ERRORCODE.NET_E_INVALID_TOKEN,
            message: ERROR_MESSAGE(ERRORCODE.NET_E_INVALID_TOKEN),
          },
          HttpStatus.FORBIDDEN,
        );
      }
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        console.log('TokenExpiredError : expired token');

        throw new HttpException(
          {
            message: err.message,
            error: ERRORCODE.NET_E_EXPIRED_TOKEN,
          },
          HttpStatus.FORBIDDEN,
        );
      } else if (err instanceof NotBeforeError) {
        console.log('NotBeforeError: invalid token');
        throw new HttpException(
          {
            message: err.message,
            error: ERRORCODE.NET_E_INVALID_TOKEN,
          },
          HttpStatus.FORBIDDEN,
        );
      } else if (err instanceof JsonWebTokenError) {
        console.log('JsonWebTokenError: invalid token');
        throw new HttpException(
          {
            message: err.message,
            error: ERRORCODE.NET_E_INVALID_TOKEN,
          },
          HttpStatus.FORBIDDEN,
        );
      } else {
        console.log('invalid token : ' + err);
        throw new HttpException(
          {
            message: err.message,
            error: ERRORCODE.NET_E_INVALID_TOKEN,
          },
          HttpStatus.FORBIDDEN,
        );
      }
    }

    return true;
  }
}
