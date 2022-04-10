import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordCreateWithoutFinancialRecordsInput } from './user-record-create-without-financial-records.input';
import { UserRecordCreateOrConnectWithoutFinancialRecordsInput } from './user-record-create-or-connect-without-financial-records.input';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';

@InputType()
export class UserRecordCreateNestedOneWithoutFinancialRecordsInput {
  @Field(() => UserRecordCreateWithoutFinancialRecordsInput, { nullable: true })
  create?: UserRecordCreateWithoutFinancialRecordsInput;

  @Field(() => UserRecordCreateOrConnectWithoutFinancialRecordsInput, {
    nullable: true,
  })
  connectOrCreate?: UserRecordCreateOrConnectWithoutFinancialRecordsInput;

  @Field(() => UserRecordWhereUniqueInput, { nullable: true })
  connect?: UserRecordWhereUniqueInput;
}
