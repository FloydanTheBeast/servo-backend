import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import ms from 'ms';

import {
  ACCESS_TOKEN_EXPIRATION_TIME_KEY,
  ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_EXPIRATION_TIME_KEY,
  REFRESH_TOKEN_SECRET_KEY,
} from 'src/consts/env-variables';
import { UserSession } from 'src/user/models';

import { AuthSessionPayload } from './types';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async createSession(user: Pick<User, 'id' | 'email'>): Promise<UserSession> {
    const payload: AuthSessionPayload = {
      id: user.id,
      email: user.email,
    };

    const accessTokenExpiresIn = this.configService.get<string>(
      ACCESS_TOKEN_EXPIRATION_TIME_KEY,
    );

    const refreshTokenExpiresIn = this.configService.get<string>(
      REFRESH_TOKEN_EXPIRATION_TIME_KEY,
    );

    const date = new Date();

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>(ACCESS_TOKEN_SECRET_KEY),
        expiresIn: accessTokenExpiresIn,
      }),
      accessTokenExpiresIn: date.getTime() + ms(accessTokenExpiresIn),
      refreshToken: await this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>(REFRESH_TOKEN_SECRET_KEY),
        expiresIn: refreshTokenExpiresIn,
      }),
      refreshTokenExpiresIn: date.getTime() + ms(refreshTokenExpiresIn),
    };
  }

  async refreshSession(refreshToken: string) {
    if (!refreshToken) {
      throw new HttpException(
        'Refresh token was not provided',
        HttpStatus.BAD_REQUEST,
      );
    }

    const payload = this.jwtService.verify(refreshToken, {
      secret: this.configService.get<string>(REFRESH_TOKEN_SECRET_KEY),
    });

    return this.createSession(payload);
  }
}
