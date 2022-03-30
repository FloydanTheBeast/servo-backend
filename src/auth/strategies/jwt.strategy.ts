import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ACCESS_TOKEN_SECRET_KEY } from 'src/consts/env-variables';

import { AuthSessionPayload } from '../types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(ACCESS_TOKEN_SECRET_KEY),
    });
  }

  async validate(payload: any): Promise<AuthSessionPayload> {
    return { email: payload.email, id: payload.id };
  }
}
