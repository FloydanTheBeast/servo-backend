import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordCreateWithoutUserInput } from './user-record-create-without-user.input';
import { UserRecordCreateOrConnectWithoutUserInput } from './user-record-create-or-connect-without-user.input';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';

@InputType()
export class UserRecordCreateNestedOneWithoutUserInput {
  @Field(() => UserRecordCreateWithoutUserInput, { nullable: true })
  create?: UserRecordCreateWithoutUserInput;

  @Field(() => UserRecordCreateOrConnectWithoutUserInput, { nullable: true })
  connectOrCreate?: UserRecordCreateOrConnectWithoutUserInput;

  @Field(() => UserRecordWhereUniqueInput, { nullable: true })
  connect?: UserRecordWhereUniqueInput;
}
