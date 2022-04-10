import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinancialRecordWhereInput } from './financial-record-where.input';

@ArgsType()
export class DeleteManyFinancialRecordArgs {
  @Field(() => FinancialRecordWhereInput, { nullable: true })
  where?: FinancialRecordWhereInput;
}
