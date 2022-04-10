import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRecordsInput } from '../user/user-create-nested-one-without-records.input';
import { FinancialRecordCreateNestedManyWithoutUserRecordsInput } from '../financial-record/financial-record-create-nested-many-without-user-records.input';

@InputType()
export class UserRecordCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => UserCreateNestedOneWithoutRecordsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutRecordsInput;

  @Field(() => FinancialRecordCreateNestedManyWithoutUserRecordsInput, {
    nullable: true,
  })
  financialRecords?: FinancialRecordCreateNestedManyWithoutUserRecordsInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
