import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { StepsActivityRecordCreateInput } from 'src/@generated/graphql/steps-activity-record/steps-activity-record-create.input';
import { StepsActivityRecordUpdateInput } from 'src/@generated/graphql/steps-activity-record/steps-activity-record-update.input';

@Injectable()
export class StepsActivityRecordService {
  constructor(private readonly prismaService: PrismaService) {}

  async getStepsActivityRecords(userId: number) {
    return this.prismaService.stepsActivityRecord.findMany({
      where: { userRecords: { userId } },
    });
  }

  async createStepsActivityRecord(
    userId: number,
    data: StepsActivityRecordCreateInput,
  ) {
    return this.prismaService.userRecord.upsert({
      where: { userId },
      create: { userId, stepsActivityRecords: { create: data } },
      update: { userId, stepsActivityRecords: { create: data } },
    });
  }

  async updateStepsActivityRecord(
    id: string,
    data: StepsActivityRecordUpdateInput,
  ) {
    return this.prismaService.stepsActivityRecord.update({
      where: { id },
      data,
    });
  }

  async deleteStepsActivityRecord(id: string) {
    return this.prismaService.stepsActivityRecord.delete({
      where: { id },
    });
  }
}
