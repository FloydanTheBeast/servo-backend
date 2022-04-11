import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalStateRecordCreateWithoutUserRecordsInput } from './emotional-state-record-create-without-user-records.input';
import { EmotionalStateRecordCreateOrConnectWithoutUserRecordsInput } from './emotional-state-record-create-or-connect-without-user-records.input';
import { EmotionalStateRecordUpsertWithWhereUniqueWithoutUserRecordsInput } from './emotional-state-record-upsert-with-where-unique-without-user-records.input';
import { EmotionalStateRecordCreateManyUserRecordsInputEnvelope } from './emotional-state-record-create-many-user-records-input-envelope.input';
import { EmotionalStateRecordWhereUniqueInput } from './emotional-state-record-where-unique.input';
import { EmotionalStateRecordUpdateWithWhereUniqueWithoutUserRecordsInput } from './emotional-state-record-update-with-where-unique-without-user-records.input';
import { EmotionalStateRecordUpdateManyWithWhereWithoutUserRecordsInput } from './emotional-state-record-update-many-with-where-without-user-records.input';
import { EmotionalStateRecordScalarWhereInput } from './emotional-state-record-scalar-where.input';

@InputType()
export class EmotionalStateRecordUpdateManyWithoutUserRecordsInput {
  @Field(() => [EmotionalStateRecordCreateWithoutUserRecordsInput], {
    nullable: true,
  })
  create?: Array<EmotionalStateRecordCreateWithoutUserRecordsInput>;

  @Field(() => [EmotionalStateRecordCreateOrConnectWithoutUserRecordsInput], {
    nullable: true,
  })
  connectOrCreate?: Array<EmotionalStateRecordCreateOrConnectWithoutUserRecordsInput>;

  @Field(
    () => [EmotionalStateRecordUpsertWithWhereUniqueWithoutUserRecordsInput],
    { nullable: true },
  )
  upsert?: Array<EmotionalStateRecordUpsertWithWhereUniqueWithoutUserRecordsInput>;

  @Field(() => EmotionalStateRecordCreateManyUserRecordsInputEnvelope, {
    nullable: true,
  })
  createMany?: EmotionalStateRecordCreateManyUserRecordsInputEnvelope;

  @Field(() => [EmotionalStateRecordWhereUniqueInput], { nullable: true })
  set?: Array<EmotionalStateRecordWhereUniqueInput>;

  @Field(() => [EmotionalStateRecordWhereUniqueInput], { nullable: true })
  disconnect?: Array<EmotionalStateRecordWhereUniqueInput>;

  @Field(() => [EmotionalStateRecordWhereUniqueInput], { nullable: true })
  delete?: Array<EmotionalStateRecordWhereUniqueInput>;

  @Field(() => [EmotionalStateRecordWhereUniqueInput], { nullable: true })
  connect?: Array<EmotionalStateRecordWhereUniqueInput>;

  @Field(
    () => [EmotionalStateRecordUpdateWithWhereUniqueWithoutUserRecordsInput],
    { nullable: true },
  )
  update?: Array<EmotionalStateRecordUpdateWithWhereUniqueWithoutUserRecordsInput>;

  @Field(
    () => [EmotionalStateRecordUpdateManyWithWhereWithoutUserRecordsInput],
    { nullable: true },
  )
  updateMany?: Array<EmotionalStateRecordUpdateManyWithWhereWithoutUserRecordsInput>;

  @Field(() => [EmotionalStateRecordScalarWhereInput], { nullable: true })
  deleteMany?: Array<EmotionalStateRecordScalarWhereInput>;
}
