import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

import { UserRecord } from 'src/@generated/graphql/user-record/user-record.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthSessionPayload } from 'src/auth/types';
import { CurrentUser } from 'src/decorators';

import { RecordService } from './record.service';

@Resolver(() => UserRecord)
export class RecordResolver {
  constructor(private readonly recordsService: RecordService) {}

  @Query(() => UserRecord, { nullable: true })
  @UseGuards(JwtAuthGuard)
  async userRecords(@CurrentUser() { id: userId }: AuthSessionPayload) {
    return await this.recordsService.getUserRecordsByUserId(userId);
  }
}
