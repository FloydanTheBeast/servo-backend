import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordCreateWithoutUserInput } from './user-record-create-without-user.input';
import { UserRecordCreateOrConnectWithoutUserInput } from './user-record-create-or-connect-without-user.input';
import { UserRecordUpsertWithoutUserInput } from './user-record-upsert-without-user.input';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';
import { UserRecordUpdateWithoutUserInput } from './user-record-update-without-user.input';

@InputType()
export class UserRecordUncheckedUpdateOneWithoutUserInput {
  @Field(() => UserRecordCreateWithoutUserInput, { nullable: true })
  create?: UserRecordCreateWithoutUserInput;

  @Field(() => UserRecordCreateOrConnectWithoutUserInput, { nullable: true })
  connectOrCreate?: UserRecordCreateOrConnectWithoutUserInput;

  @Field(() => UserRecordUpsertWithoutUserInput, { nullable: true })
  upsert?: UserRecordUpsertWithoutUserInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => UserRecordWhereUniqueInput, { nullable: true })
  connect?: UserRecordWhereUniqueInput;

  @Field(() => UserRecordUpdateWithoutUserInput, { nullable: true })
  update?: UserRecordUpdateWithoutUserInput;
}
