import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRecordsInput } from './user-create-without-records.input';
import { UserCreateOrConnectWithoutRecordsInput } from './user-create-or-connect-without-records.input';
import { UserUpsertWithoutRecordsInput } from './user-upsert-without-records.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRecordsInput } from './user-update-without-records.input';

@InputType()
export class UserUpdateOneRequiredWithoutRecordsInput {
  @Field(() => UserCreateWithoutRecordsInput, { nullable: true })
  create?: UserCreateWithoutRecordsInput;

  @Field(() => UserCreateOrConnectWithoutRecordsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutRecordsInput;

  @Field(() => UserUpsertWithoutRecordsInput, { nullable: true })
  upsert?: UserUpsertWithoutRecordsInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutRecordsInput, { nullable: true })
  update?: UserUpdateWithoutRecordsInput;
}
