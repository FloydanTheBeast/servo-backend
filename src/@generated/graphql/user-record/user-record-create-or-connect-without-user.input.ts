import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';
import { UserRecordCreateWithoutUserInput } from './user-record-create-without-user.input';

@InputType()
export class UserRecordCreateOrConnectWithoutUserInput {
  @Field(() => UserRecordWhereUniqueInput, { nullable: false })
  where!: UserRecordWhereUniqueInput;

  @Field(() => UserRecordCreateWithoutUserInput, { nullable: false })
  create!: UserRecordCreateWithoutUserInput;
}
