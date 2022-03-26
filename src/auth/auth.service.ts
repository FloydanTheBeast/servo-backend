import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import ms from 'ms';
import { AuthSessionPayload } from './types';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async createSession(user: Pick<User, 'id' | 'email'>) {
    const payload: AuthSessionPayload = {
      id: user.id,
      email: user.email,
    };

    const accessTokenExpiresIn = this.configService.get<string>(
      'ACCESS_TOKEN_EXPIRATION_TIME',
    );

    const date = new Date();

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: accessTokenExpiresIn,
      }),
      accessTokenExpiresIn: date.getTime() + ms(accessTokenExpiresIn),
    };
  }
}
