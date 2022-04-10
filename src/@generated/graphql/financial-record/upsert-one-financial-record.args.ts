import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinancialRecordWhereUniqueInput } from './financial-record-where-unique.input';
import { FinancialRecordCreateInput } from './financial-record-create.input';
import { FinancialRecordUpdateInput } from './financial-record-update.input';

@ArgsType()
export class UpsertOneFinancialRecordArgs {
  @Field(() => FinancialRecordWhereUniqueInput, { nullable: false })
  where!: FinancialRecordWhereUniqueInput;

  @Field(() => FinancialRecordCreateInput, { nullable: false })
  create!: FinancialRecordCreateInput;

  @Field(() => FinancialRecordUpdateInput, { nullable: false })
  update!: FinancialRecordUpdateInput;
}
