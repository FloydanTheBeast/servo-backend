import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FinancialRecordAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
}
