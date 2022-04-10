import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserRecordUncheckedCreateWithoutFinancialRecordsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
