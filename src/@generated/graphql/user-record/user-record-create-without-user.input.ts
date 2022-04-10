import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialRecordCreateNestedManyWithoutUserRecordsInput } from '../financial-record/financial-record-create-nested-many-without-user-records.input';

@InputType()
export class UserRecordCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => FinancialRecordCreateNestedManyWithoutUserRecordsInput, {
    nullable: true,
  })
  financialRecords?: FinancialRecordCreateNestedManyWithoutUserRecordsInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
