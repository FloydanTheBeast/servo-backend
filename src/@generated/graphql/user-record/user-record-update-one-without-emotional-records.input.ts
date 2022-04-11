import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordCreateWithoutEmotionalRecordsInput } from './user-record-create-without-emotional-records.input';
import { UserRecordCreateOrConnectWithoutEmotionalRecordsInput } from './user-record-create-or-connect-without-emotional-records.input';
import { UserRecordUpsertWithoutEmotionalRecordsInput } from './user-record-upsert-without-emotional-records.input';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';
import { UserRecordUpdateWithoutEmotionalRecordsInput } from './user-record-update-without-emotional-records.input';

@InputType()
export class UserRecordUpdateOneWithoutEmotionalRecordsInput {
  @Field(() => UserRecordCreateWithoutEmotionalRecordsInput, { nullable: true })
  create?: UserRecordCreateWithoutEmotionalRecordsInput;

  @Field(() => UserRecordCreateOrConnectWithoutEmotionalRecordsInput, {
    nullable: true,
  })
  connectOrCreate?: UserRecordCreateOrConnectWithoutEmotionalRecordsInput;

  @Field(() => UserRecordUpsertWithoutEmotionalRecordsInput, { nullable: true })
  upsert?: UserRecordUpsertWithoutEmotionalRecordsInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => UserRecordWhereUniqueInput, { nullable: true })
  connect?: UserRecordWhereUniqueInput;

  @Field(() => UserRecordUpdateWithoutEmotionalRecordsInput, { nullable: true })
  update?: UserRecordUpdateWithoutEmotionalRecordsInput;
}
