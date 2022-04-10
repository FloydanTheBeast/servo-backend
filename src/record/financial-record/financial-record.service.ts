import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { FinancialRecordCreateInput } from 'src/@generated/graphql/financial-record/financial-record-create.input';
import { FinancialRecordUpdateInput } from 'src/@generated/graphql/financial-record/financial-record-update.input';

@Injectable()
export class FinancialRecordService {
  constructor(private readonly prismaService: PrismaService) {}

  async getFinancialRecords(userId: number) {
    return this.prismaService.financialRecord.findMany({
      where: { userRecords: { userId } },
    });
  }

  async createFinancialRecord(
    userId: number,
    financialRecord: FinancialRecordCreateInput,
  ) {
    return this.prismaService.userRecord.upsert({
      where: { userId },
      create: { userId, financialRecords: { create: financialRecord } },
      update: { userId, financialRecords: { create: financialRecord } },
    });
  }

  async updateFinancialRecord(
    financialRecordId: string,
    financialRecord: FinancialRecordUpdateInput,
  ) {
    return this.prismaService.financialRecord.update({
      where: { id: financialRecordId },
      data: financialRecord,
    });
  }

  async deleteFinancialRecord(financialRecordId: string) {
    return this.prismaService.financialRecord.delete({
      where: { id: financialRecordId },
    });
  }
}
