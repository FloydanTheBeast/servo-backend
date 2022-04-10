import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRecordsInput } from './user-create-without-records.input';
import { UserCreateOrConnectWithoutRecordsInput } from './user-create-or-connect-without-records.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRecordsInput {
  @Field(() => UserCreateWithoutRecordsInput, { nullable: true })
  create?: UserCreateWithoutRecordsInput;

  @Field(() => UserCreateOrConnectWithoutRecordsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutRecordsInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput;
}
