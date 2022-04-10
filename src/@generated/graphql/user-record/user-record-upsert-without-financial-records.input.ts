import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordUpdateWithoutFinancialRecordsInput } from './user-record-update-without-financial-records.input';
import { UserRecordCreateWithoutFinancialRecordsInput } from './user-record-create-without-financial-records.input';

@InputType()
export class UserRecordUpsertWithoutFinancialRecordsInput {
  @Field(() => UserRecordUpdateWithoutFinancialRecordsInput, {
    nullable: false,
  })
  update!: UserRecordUpdateWithoutFinancialRecordsInput;

  @Field(() => UserRecordCreateWithoutFinancialRecordsInput, {
    nullable: false,
  })
  create!: UserRecordCreateWithoutFinancialRecordsInput;
}
