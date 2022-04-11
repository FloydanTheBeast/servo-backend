import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalStateRecordCreateWithoutUserRecordsInput } from './emotional-state-record-create-without-user-records.input';
import { EmotionalStateRecordCreateOrConnectWithoutUserRecordsInput } from './emotional-state-record-create-or-connect-without-user-records.input';
import { EmotionalStateRecordCreateManyUserRecordsInputEnvelope } from './emotional-state-record-create-many-user-records-input-envelope.input';
import { EmotionalStateRecordWhereUniqueInput } from './emotional-state-record-where-unique.input';

@InputType()
export class EmotionalStateRecordCreateNestedManyWithoutUserRecordsInput {
  @Field(() => [EmotionalStateRecordCreateWithoutUserRecordsInput], {
    nullable: true,
  })
  create?: Array<EmotionalStateRecordCreateWithoutUserRecordsInput>;

  @Field(() => [EmotionalStateRecordCreateOrConnectWithoutUserRecordsInput], {
    nullable: true,
  })
  connectOrCreate?: Array<EmotionalStateRecordCreateOrConnectWithoutUserRecordsInput>;

  @Field(() => EmotionalStateRecordCreateManyUserRecordsInputEnvelope, {
    nullable: true,
  })
  createMany?: EmotionalStateRecordCreateManyUserRecordsInputEnvelope;

  @Field(() => [EmotionalStateRecordWhereUniqueInput], { nullable: true })
  connect?: Array<EmotionalStateRecordWhereUniqueInput>;
}
