import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalStateRecordWhereUniqueInput } from './emotional-state-record-where-unique.input';
import { EmotionalStateRecordCreateWithoutUserRecordsInput } from './emotional-state-record-create-without-user-records.input';

@InputType()
export class EmotionalStateRecordCreateOrConnectWithoutUserRecordsInput {
  @Field(() => EmotionalStateRecordWhereUniqueInput, { nullable: false })
  where!: EmotionalStateRecordWhereUniqueInput;

  @Field(() => EmotionalStateRecordCreateWithoutUserRecordsInput, {
    nullable: false,
  })
  create!: EmotionalStateRecordCreateWithoutUserRecordsInput;
}
