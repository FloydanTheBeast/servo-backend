import { UseGuards } from '@nestjs/common';
import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';

import { StepsActivityRecordCreateInput } from 'src/@generated/graphql/steps-activity-record/steps-activity-record-create.input';
import { StepsActivityRecordUpdateInput } from 'src/@generated/graphql/steps-activity-record/steps-activity-record-update.input';
import { StepsActivityRecord } from 'src/@generated/graphql/steps-activity-record/steps-activity-record.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthSessionPayload } from 'src/auth/types';
import { CurrentUser } from 'src/decorators';

import { StepsActivityRecordService } from './steps-activity-record.service';
import { StepsActivitySchema } from './validation';

@Resolver(() => StepsActivityRecord)
export class StepsActivityRecordResolver {
  constructor(
    private readonly stepsActivityRecordService: StepsActivityRecordService,
  ) {}

  @Query(() => [StepsActivityRecord])
  @UseGuards(JwtAuthGuard)
  async stepsActivityRecords(
    @CurrentUser() { id: userId }: AuthSessionPayload,
  ) {
    return await this.stepsActivityRecordService.getStepsActivityRecords(
      userId,
    );
  }

  @Mutation(() => StepsActivityRecord)
  @UseGuards(JwtAuthGuard)
  async createStepsActivityRecord(
    @CurrentUser() { id: userId }: AuthSessionPayload,
    @Args('data') data: StepsActivityRecordCreateInput,
  ) {
    await StepsActivitySchema.validateAsync(data);

    return await this.stepsActivityRecordService.createStepsActivityRecord(
      userId,
      data,
    );
  }

  @Mutation(() => StepsActivityRecord)
  @UseGuards(JwtAuthGuard)
  async updateStepsActivityRecord(
    @Args('id') id: string,
    @Args('data') data: StepsActivityRecordUpdateInput,
  ) {
    await StepsActivitySchema.validateAsync(data);

    return await this.stepsActivityRecordService.updateStepsActivityRecord(
      id,
      data,
    );
  }

  @Mutation(() => StepsActivityRecord)
  @UseGuards(JwtAuthGuard)
  async deleteStepsActivityRecord(@Args('id') id: string) {
    return await this.stepsActivityRecordService.deleteStepsActivityRecord(id);
  }
}
