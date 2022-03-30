import { Module } from '@nestjs/common';

import { AuthModule } from 'src/auth/auth.module';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [AuthModule],
  providers: [UserService, UserResolver],
  exports: [UserResolver],
})
export class UserModule {}
