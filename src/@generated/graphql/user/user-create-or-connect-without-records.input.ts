import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutRecordsInput } from './user-create-without-records.input';

@InputType()
export class UserCreateOrConnectWithoutRecordsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutRecordsInput, { nullable: false })
  create!: UserCreateWithoutRecordsInput;
}
