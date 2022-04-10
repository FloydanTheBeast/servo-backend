import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinancialRecordUpdateManyMutationInput } from './financial-record-update-many-mutation.input';
import { FinancialRecordWhereInput } from './financial-record-where.input';

@ArgsType()
export class UpdateManyFinancialRecordArgs {
  @Field(() => FinancialRecordUpdateManyMutationInput, { nullable: false })
  data!: FinancialRecordUpdateManyMutationInput;

  @Field(() => FinancialRecordWhereInput, { nullable: true })
  where?: FinancialRecordWhereInput;
}
