import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalStateRecordWhereUniqueInput } from './emotional-state-record-where-unique.input';
import { EmotionalStateRecordUpdateWithoutUserRecordsInput } from './emotional-state-record-update-without-user-records.input';

@InputType()
export class EmotionalStateRecordUpdateWithWhereUniqueWithoutUserRecordsInput {
  @Field(() => EmotionalStateRecordWhereUniqueInput, { nullable: false })
  where!: EmotionalStateRecordWhereUniqueInput;

  @Field(() => EmotionalStateRecordUpdateWithoutUserRecordsInput, {
    nullable: false,
  })
  data!: EmotionalStateRecordUpdateWithoutUserRecordsInput;
}
