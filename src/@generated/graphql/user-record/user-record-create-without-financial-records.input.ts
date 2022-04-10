import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRecordsInput } from '../user/user-create-nested-one-without-records.input';

@InputType()
export class UserRecordCreateWithoutFinancialRecordsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => UserCreateNestedOneWithoutRecordsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutRecordsInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
