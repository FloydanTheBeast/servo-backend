import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialRecordWhereUniqueInput } from './financial-record-where-unique.input';
import { FinancialRecordCreateWithoutUserRecordsInput } from './financial-record-create-without-user-records.input';

@InputType()
export class FinancialRecordCreateOrConnectWithoutUserRecordsInput {
  @Field(() => FinancialRecordWhereUniqueInput, { nullable: false })
  where!: FinancialRecordWhereUniqueInput;

  @Field(() => FinancialRecordCreateWithoutUserRecordsInput, {
    nullable: false,
  })
  create!: FinancialRecordCreateWithoutUserRecordsInput;
}
