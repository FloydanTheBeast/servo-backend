import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { EmotionalStateRecordCreateInput } from 'src/@generated/graphql/emotional-state-record/emotional-state-record-create.input';
import { EmotionalStateRecordUpdateInput } from 'src/@generated/graphql/emotional-state-record/emotional-state-record-update.input';

@Injectable()
export class EmotionalStateRecordService {
  constructor(private readonly prismaService: PrismaService) {}

  async getEmotinalStateRecords(userId: number) {
    return this.prismaService.emotionalStateRecord.findMany({
      where: { userRecords: { userId } },
    });
  }

  async createEmotionalStateRecord(
    userId: number,
    data: EmotionalStateRecordCreateInput,
  ) {
    return this.prismaService.userRecord.upsert({
      where: { userId },
      create: { userId, emotionalRecords: { create: data } },
      update: { userId, emotionalRecords: { create: data } },
    });
  }

  async updateEmotionalStateRecord(
    emotionalStateRecordId: string,
    data: EmotionalStateRecordUpdateInput,
  ) {
    return this.prismaService.emotionalStateRecord.update({
      where: { id: emotionalStateRecordId },
      data,
    });
  }

  async deleteEmotionalStateRecord(emotionalStateRecordId: string) {
    return this.prismaService.emotionalStateRecord.delete({
      where: { id: emotionalStateRecordId },
    });
  }
}
