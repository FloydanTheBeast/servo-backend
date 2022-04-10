import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialRecordCreateWithoutUserRecordsInput } from './financial-record-create-without-user-records.input';
import { FinancialRecordCreateOrConnectWithoutUserRecordsInput } from './financial-record-create-or-connect-without-user-records.input';
import { FinancialRecordUpsertWithWhereUniqueWithoutUserRecordsInput } from './financial-record-upsert-with-where-unique-without-user-records.input';
import { FinancialRecordCreateManyUserRecordsInputEnvelope } from './financial-record-create-many-user-records-input-envelope.input';
import { FinancialRecordWhereUniqueInput } from './financial-record-where-unique.input';
import { FinancialRecordUpdateWithWhereUniqueWithoutUserRecordsInput } from './financial-record-update-with-where-unique-without-user-records.input';
import { FinancialRecordUpdateManyWithWhereWithoutUserRecordsInput } from './financial-record-update-many-with-where-without-user-records.input';
import { FinancialRecordScalarWhereInput } from './financial-record-scalar-where.input';

@InputType()
export class FinancialRecordUpdateManyWithoutUserRecordsInput {
  @Field(() => [FinancialRecordCreateWithoutUserRecordsInput], {
    nullable: true,
  })
  create?: Array<FinancialRecordCreateWithoutUserRecordsInput>;

  @Field(() => [FinancialRecordCreateOrConnectWithoutUserRecordsInput], {
    nullable: true,
  })
  connectOrCreate?: Array<FinancialRecordCreateOrConnectWithoutUserRecordsInput>;

  @Field(() => [FinancialRecordUpsertWithWhereUniqueWithoutUserRecordsInput], {
    nullable: true,
  })
  upsert?: Array<FinancialRecordUpsertWithWhereUniqueWithoutUserRecordsInput>;

  @Field(() => FinancialRecordCreateManyUserRecordsInputEnvelope, {
    nullable: true,
  })
  createMany?: FinancialRecordCreateManyUserRecordsInputEnvelope;

  @Field(() => [FinancialRecordWhereUniqueInput], { nullable: true })
  set?: Array<FinancialRecordWhereUniqueInput>;

  @Field(() => [FinancialRecordWhereUniqueInput], { nullable: true })
  disconnect?: Array<FinancialRecordWhereUniqueInput>;

  @Field(() => [FinancialRecordWhereUniqueInput], { nullable: true })
  delete?: Array<FinancialRecordWhereUniqueInput>;

  @Field(() => [FinancialRecordWhereUniqueInput], { nullable: true })
  connect?: Array<FinancialRecordWhereUniqueInput>;

  @Field(() => [FinancialRecordUpdateWithWhereUniqueWithoutUserRecordsInput], {
    nullable: true,
  })
  update?: Array<FinancialRecordUpdateWithWhereUniqueWithoutUserRecordsInput>;

  @Field(() => [FinancialRecordUpdateManyWithWhereWithoutUserRecordsInput], {
    nullable: true,
  })
  updateMany?: Array<FinancialRecordUpdateManyWithWhereWithoutUserRecordsInput>;

  @Field(() => [FinancialRecordScalarWhereInput], { nullable: true })
  deleteMany?: Array<FinancialRecordScalarWhereInput>;
}
