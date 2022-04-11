import { UseGuards } from '@nestjs/common';
import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';

import { EmotionalStateRecordCreateInput } from 'src/@generated/graphql/emotional-state-record/emotional-state-record-create.input';
import { EmotionalStateRecordUpdateInput } from 'src/@generated/graphql/emotional-state-record/emotional-state-record-update.input';
import { EmotionalStateRecord } from 'src/@generated/graphql/emotional-state-record/emotional-state-record.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthSessionPayload } from 'src/auth/types';
import { CurrentUser } from 'src/decorators';

import { EmotionalStateRecordService } from './emotional-state-record.service';

@Resolver(() => EmotionalStateRecord)
export class EmotionalStateRecordResolver {
  constructor(
    private readonly emotionalStateRecordService: EmotionalStateRecordService,
  ) {}

  @Query(() => [EmotionalStateRecord])
  @UseGuards(JwtAuthGuard)
  async emotionalStateRecords(
    @CurrentUser() { id: userId }: AuthSessionPayload,
  ) {
    return await this.emotionalStateRecordService.getEmotinalStateRecords(
      userId,
    );
  }

  @Mutation(() => EmotionalStateRecord)
  @UseGuards(JwtAuthGuard)
  async createEmotionalStateRecord(
    @CurrentUser() { id: userId }: AuthSessionPayload,
    @Args('data') data: EmotionalStateRecordCreateInput,
  ) {
    return await this.emotionalStateRecordService.createEmotionalStateRecord(
      userId,
      data,
    );
  }

  @Mutation(() => EmotionalStateRecord)
  @UseGuards(JwtAuthGuard)
  async updateEmotionalStateRecord(
    @Args('id') id: string,
    @Args('data') data: EmotionalStateRecordUpdateInput,
  ) {
    return await this.emotionalStateRecordService.updateEmotionalStateRecord(
      id,
      data,
    );
  }

  @Mutation(() => EmotionalStateRecord)
  @UseGuards(JwtAuthGuard)
  async deleteEmotionalStateRecord(@Args('id') id: string) {
    return await this.emotionalStateRecordService.deleteEmotionalStateRecord(
      id,
    );
  }
}
