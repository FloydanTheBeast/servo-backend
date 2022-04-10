import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';
import { UserRecordCreateWithoutFinancialRecordsInput } from './user-record-create-without-financial-records.input';

@InputType()
export class UserRecordCreateOrConnectWithoutFinancialRecordsInput {
  @Field(() => UserRecordWhereUniqueInput, { nullable: false })
  where!: UserRecordWhereUniqueInput;

  @Field(() => UserRecordCreateWithoutFinancialRecordsInput, {
    nullable: false,
  })
  create!: UserRecordCreateWithoutFinancialRecordsInput;
}
