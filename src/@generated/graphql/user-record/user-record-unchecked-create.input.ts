import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FinancialRecordUncheckedCreateNestedManyWithoutUserRecordsInput } from '../financial-record/financial-record-unchecked-create-nested-many-without-user-records.input';

@InputType()
export class UserRecordUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(
    () => FinancialRecordUncheckedCreateNestedManyWithoutUserRecordsInput,
    { nullable: true },
  )
  financialRecords?: FinancialRecordUncheckedCreateNestedManyWithoutUserRecordsInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
