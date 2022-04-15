import { UseGuards } from '@nestjs/common';
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';

import { FinancialRecordCreateInput } from 'src/@generated/graphql/financial-record/financial-record-create.input';
import { FinancialRecordUpdateInput } from 'src/@generated/graphql/financial-record/financial-record-update.input';
import { FinancialRecord } from 'src/@generated/graphql/financial-record/financial-record.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthSessionPayload } from 'src/auth/types';
import { CurrentUser } from 'src/decorators';

import { FinancialRecordService } from './financial-record.service';
import { FinancialRecordSchema } from './validation';

@Resolver(() => FinancialRecord)
export class FinancialRecordResolver {
  constructor(
    private readonly financialRecordService: FinancialRecordService,
  ) {}

  @Query(() => [FinancialRecord])
  @UseGuards(JwtAuthGuard)
  async financialRecords(@CurrentUser() { id: userId }: AuthSessionPayload) {
    return this.financialRecordService.getFinancialRecords(userId);
  }

  @Mutation(() => FinancialRecord)
  @UseGuards(JwtAuthGuard)
  async createFinancialRecord(
    @CurrentUser() { id: userId }: AuthSessionPayload,
    @Args('data') data: FinancialRecordCreateInput,
  ) {
    await FinancialRecordSchema.validateAsync(data);

    return await this.financialRecordService.createFinancialRecord(
      userId,
      data,
    );
  }

  @Mutation(() => FinancialRecord)
  @UseGuards(JwtAuthGuard)
  async updateFinancialRecord(
    @Args('id') id: string,
    @Args('data') data: FinancialRecordUpdateInput,
  ) {
    await FinancialRecordSchema.validateAsync(data);

    return await this.financialRecordService.updateFinancialRecord(id, data);
  }

  @Mutation(() => FinancialRecord)
  async deleteFinancialRecord(@Args('id') id: string) {
    return await this.financialRecordService.deleteFinancialRecord(id);
  }
}
