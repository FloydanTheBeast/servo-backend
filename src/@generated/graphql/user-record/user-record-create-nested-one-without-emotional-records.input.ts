import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordCreateWithoutEmotionalRecordsInput } from './user-record-create-without-emotional-records.input';
import { UserRecordCreateOrConnectWithoutEmotionalRecordsInput } from './user-record-create-or-connect-without-emotional-records.input';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';

@InputType()
export class UserRecordCreateNestedOneWithoutEmotionalRecordsInput {
  @Field(() => UserRecordCreateWithoutEmotionalRecordsInput, { nullable: true })
  create?: UserRecordCreateWithoutEmotionalRecordsInput;

  @Field(() => UserRecordCreateOrConnectWithoutEmotionalRecordsInput, {
    nullable: true,
  })
  connectOrCreate?: UserRecordCreateOrConnectWithoutEmotionalRecordsInput;

  @Field(() => UserRecordWhereUniqueInput, { nullable: true })
  connect?: UserRecordWhereUniqueInput;
}
