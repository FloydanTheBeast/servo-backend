import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRecordsInput } from './user-update-without-records.input';
import { UserCreateWithoutRecordsInput } from './user-create-without-records.input';

@InputType()
export class UserUpsertWithoutRecordsInput {
  @Field(() => UserUpdateWithoutRecordsInput, { nullable: false })
  update!: UserUpdateWithoutRecordsInput;

  @Field(() => UserCreateWithoutRecordsInput, { nullable: false })
  create!: UserCreateWithoutRecordsInput;
}
