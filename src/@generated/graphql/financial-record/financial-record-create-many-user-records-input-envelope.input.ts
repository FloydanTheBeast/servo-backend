import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialRecordCreateManyUserRecordsInput } from './financial-record-create-many-user-records.input';

@InputType()
export class FinancialRecordCreateManyUserRecordsInputEnvelope {
  @Field(() => [FinancialRecordCreateManyUserRecordsInput], { nullable: false })
  data!: Array<FinancialRecordCreateManyUserRecordsInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
