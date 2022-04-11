import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordUpdateWithoutEmotionalRecordsInput } from './user-record-update-without-emotional-records.input';
import { UserRecordCreateWithoutEmotionalRecordsInput } from './user-record-create-without-emotional-records.input';

@InputType()
export class UserRecordUpsertWithoutEmotionalRecordsInput {
  @Field(() => UserRecordUpdateWithoutEmotionalRecordsInput, {
    nullable: false,
  })
  update!: UserRecordUpdateWithoutEmotionalRecordsInput;

  @Field(() => UserRecordCreateWithoutEmotionalRecordsInput, {
    nullable: false,
  })
  create!: UserRecordCreateWithoutEmotionalRecordsInput;
}
