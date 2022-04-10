import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinancialRecordCreateInput } from './financial-record-create.input';

@ArgsType()
export class CreateOneFinancialRecordArgs {
  @Field(() => FinancialRecordCreateInput, { nullable: false })
  data!: FinancialRecordCreateInput;
}
