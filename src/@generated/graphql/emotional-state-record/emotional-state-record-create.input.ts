import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalState } from '../prisma/emotional-state.enum';
import { UserRecordCreateNestedOneWithoutEmotionalRecordsInput } from '../user-record/user-record-create-nested-one-without-emotional-records.input';

@InputType()
export class EmotionalStateRecordCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => EmotionalState, { nullable: false })
  state!: keyof typeof EmotionalState;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: false })
  date!: Date | string;

  @Field(() => UserRecordCreateNestedOneWithoutEmotionalRecordsInput, {
    nullable: true,
  })
  userRecords?: UserRecordCreateNestedOneWithoutEmotionalRecordsInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
