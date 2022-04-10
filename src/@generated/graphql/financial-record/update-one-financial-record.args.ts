import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinancialRecordUpdateInput } from './financial-record-update.input';
import { FinancialRecordWhereUniqueInput } from './financial-record-where-unique.input';

@ArgsType()
export class UpdateOneFinancialRecordArgs {
  @Field(() => FinancialRecordUpdateInput, { nullable: false })
  data!: FinancialRecordUpdateInput;

  @Field(() => FinancialRecordWhereUniqueInput, { nullable: false })
  where!: FinancialRecordWhereUniqueInput;
}
