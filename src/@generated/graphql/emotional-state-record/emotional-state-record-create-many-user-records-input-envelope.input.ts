import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalStateRecordCreateManyUserRecordsInput } from './emotional-state-record-create-many-user-records.input';

@InputType()
export class EmotionalStateRecordCreateManyUserRecordsInputEnvelope {
  @Field(() => [EmotionalStateRecordCreateManyUserRecordsInput], {
    nullable: false,
  })
  data!: Array<EmotionalStateRecordCreateManyUserRecordsInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
