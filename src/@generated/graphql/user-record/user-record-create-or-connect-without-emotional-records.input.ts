import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';
import { UserRecordCreateWithoutEmotionalRecordsInput } from './user-record-create-without-emotional-records.input';

@InputType()
export class UserRecordCreateOrConnectWithoutEmotionalRecordsInput {
  @Field(() => UserRecordWhereUniqueInput, { nullable: false })
  where!: UserRecordWhereUniqueInput;

  @Field(() => UserRecordCreateWithoutEmotionalRecordsInput, {
    nullable: false,
  })
  create!: UserRecordCreateWithoutEmotionalRecordsInput;
}
