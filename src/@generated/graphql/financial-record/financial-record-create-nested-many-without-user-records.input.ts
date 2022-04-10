import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialRecordCreateWithoutUserRecordsInput } from './financial-record-create-without-user-records.input';
import { FinancialRecordCreateOrConnectWithoutUserRecordsInput } from './financial-record-create-or-connect-without-user-records.input';
import { FinancialRecordCreateManyUserRecordsInputEnvelope } from './financial-record-create-many-user-records-input-envelope.input';
import { FinancialRecordWhereUniqueInput } from './financial-record-where-unique.input';

@InputType()
export class FinancialRecordCreateNestedManyWithoutUserRecordsInput {
  @Field(() => [FinancialRecordCreateWithoutUserRecordsInput], {
    nullable: true,
  })
  create?: Array<FinancialRecordCreateWithoutUserRecordsInput>;

  @Field(() => [FinancialRecordCreateOrConnectWithoutUserRecordsInput], {
    nullable: true,
  })
  connectOrCreate?: Array<FinancialRecordCreateOrConnectWithoutUserRecordsInput>;

  @Field(() => FinancialRecordCreateManyUserRecordsInputEnvelope, {
    nullable: true,
  })
  createMany?: FinancialRecordCreateManyUserRecordsInputEnvelope;

  @Field(() => [FinancialRecordWhereUniqueInput], { nullable: true })
  connect?: Array<FinancialRecordWhereUniqueInput>;
}
