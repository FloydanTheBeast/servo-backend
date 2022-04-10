import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordUpdateWithoutUserInput } from './user-record-update-without-user.input';
import { UserRecordCreateWithoutUserInput } from './user-record-create-without-user.input';

@InputType()
export class UserRecordUpsertWithoutUserInput {
  @Field(() => UserRecordUpdateWithoutUserInput, { nullable: false })
  update!: UserRecordUpdateWithoutUserInput;

  @Field(() => UserRecordCreateWithoutUserInput, { nullable: false })
  create!: UserRecordCreateWithoutUserInput;
}
