import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserRecordUncheckedCreateNestedOneWithoutUserInput } from '../user-record/user-record-unchecked-create-nested-one-without-user.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: false })
  firstName!: string;

  @Field(() => String, { nullable: false })
  lastName!: string;

  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;

  @HideField()
  records?: UserRecordUncheckedCreateNestedOneWithoutUserInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
