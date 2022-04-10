import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinancialRecordWhereUniqueInput } from './financial-record-where-unique.input';

@ArgsType()
export class FindUniqueFinancialRecordArgs {
  @Field(() => FinancialRecordWhereUniqueInput, { nullable: false })
  where!: FinancialRecordWhereUniqueInput;
}
