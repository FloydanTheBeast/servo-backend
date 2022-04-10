import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialRecordWhereInput } from './financial-record-where.input';

@InputType()
export class FinancialRecordListRelationFilter {
  @Field(() => FinancialRecordWhereInput, { nullable: true })
  every?: FinancialRecordWhereInput;

  @Field(() => FinancialRecordWhereInput, { nullable: true })
  some?: FinancialRecordWhereInput;

  @Field(() => FinancialRecordWhereInput, { nullable: true })
  none?: FinancialRecordWhereInput;
}
