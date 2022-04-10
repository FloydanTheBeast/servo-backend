import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialRecordWhereUniqueInput } from './financial-record-where-unique.input';
import { FinancialRecordUpdateWithoutUserRecordsInput } from './financial-record-update-without-user-records.input';

@InputType()
export class FinancialRecordUpdateWithWhereUniqueWithoutUserRecordsInput {
  @Field(() => FinancialRecordWhereUniqueInput, { nullable: false })
  where!: FinancialRecordWhereUniqueInput;

  @Field(() => FinancialRecordUpdateWithoutUserRecordsInput, {
    nullable: false,
  })
  data!: FinancialRecordUpdateWithoutUserRecordsInput;
}
