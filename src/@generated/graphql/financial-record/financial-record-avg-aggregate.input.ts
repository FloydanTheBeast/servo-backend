import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FinancialRecordAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  amount?: true;
}
