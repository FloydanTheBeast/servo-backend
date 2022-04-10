import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordCreateWithoutFinancialRecordsInput } from './user-record-create-without-financial-records.input';
import { UserRecordCreateOrConnectWithoutFinancialRecordsInput } from './user-record-create-or-connect-without-financial-records.input';
import { UserRecordUpsertWithoutFinancialRecordsInput } from './user-record-upsert-without-financial-records.input';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';
import { UserRecordUpdateWithoutFinancialRecordsInput } from './user-record-update-without-financial-records.input';

@InputType()
export class UserRecordUpdateOneWithoutFinancialRecordsInput {
  @Field(() => UserRecordCreateWithoutFinancialRecordsInput, { nullable: true })
  create?: UserRecordCreateWithoutFinancialRecordsInput;

  @Field(() => UserRecordCreateOrConnectWithoutFinancialRecordsInput, {
    nullable: true,
  })
  connectOrCreate?: UserRecordCreateOrConnectWithoutFinancialRecordsInput;

  @Field(() => UserRecordUpsertWithoutFinancialRecordsInput, { nullable: true })
  upsert?: UserRecordUpsertWithoutFinancialRecordsInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => UserRecordWhereUniqueInput, { nullable: true })
  connect?: UserRecordWhereUniqueInput;

  @Field(() => UserRecordUpdateWithoutFinancialRecordsInput, { nullable: true })
  update?: UserRecordUpdateWithoutFinancialRecordsInput;
}
