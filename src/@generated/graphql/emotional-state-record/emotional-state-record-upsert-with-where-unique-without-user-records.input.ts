import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalStateRecordWhereUniqueInput } from './emotional-state-record-where-unique.input';
import { EmotionalStateRecordUpdateWithoutUserRecordsInput } from './emotional-state-record-update-without-user-records.input';
import { EmotionalStateRecordCreateWithoutUserRecordsInput } from './emotional-state-record-create-without-user-records.input';

@InputType()
export class EmotionalStateRecordUpsertWithWhereUniqueWithoutUserRecordsInput {
  @Field(() => EmotionalStateRecordWhereUniqueInput, { nullable: false })
  where!: EmotionalStateRecordWhereUniqueInput;

  @Field(() => EmotionalStateRecordUpdateWithoutUserRecordsInput, {
    nullable: false,
  })
  update!: EmotionalStateRecordUpdateWithoutUserRecordsInput;

  @Field(() => EmotionalStateRecordCreateWithoutUserRecordsInput, {
    nullable: false,
  })
  create!: EmotionalStateRecordCreateWithoutUserRecordsInput;
}
