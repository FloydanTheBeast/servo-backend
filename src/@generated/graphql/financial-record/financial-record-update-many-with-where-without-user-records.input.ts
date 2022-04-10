import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialRecordScalarWhereInput } from './financial-record-scalar-where.input';
import { FinancialRecordUpdateManyMutationInput } from './financial-record-update-many-mutation.input';

@InputType()
export class FinancialRecordUpdateManyWithWhereWithoutUserRecordsInput {
  @Field(() => FinancialRecordScalarWhereInput, { nullable: false })
  where!: FinancialRecordScalarWhereInput;

  @Field(() => FinancialRecordUpdateManyMutationInput, { nullable: false })
  data!: FinancialRecordUpdateManyMutationInput;
}
