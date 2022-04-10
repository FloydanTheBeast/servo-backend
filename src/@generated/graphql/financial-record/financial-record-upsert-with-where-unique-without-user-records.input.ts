import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialRecordWhereUniqueInput } from './financial-record-where-unique.input';
import { FinancialRecordUpdateWithoutUserRecordsInput } from './financial-record-update-without-user-records.input';
import { FinancialRecordCreateWithoutUserRecordsInput } from './financial-record-create-without-user-records.input';

@InputType()
export class FinancialRecordUpsertWithWhereUniqueWithoutUserRecordsInput {
  @Field(() => FinancialRecordWhereUniqueInput, { nullable: false })
  where!: FinancialRecordWhereUniqueInput;

  @Field(() => FinancialRecordUpdateWithoutUserRecordsInput, {
    nullable: false,
  })
  update!: FinancialRecordUpdateWithoutUserRecordsInput;

  @Field(() => FinancialRecordCreateWithoutUserRecordsInput, {
    nullable: false,
  })
  create!: FinancialRecordCreateWithoutUserRecordsInput;
}
