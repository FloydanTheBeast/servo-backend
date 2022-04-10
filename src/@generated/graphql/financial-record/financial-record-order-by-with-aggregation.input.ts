import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FinancialRecordCountOrderByAggregateInput } from './financial-record-count-order-by-aggregate.input';
import { FinancialRecordAvgOrderByAggregateInput } from './financial-record-avg-order-by-aggregate.input';
import { FinancialRecordMaxOrderByAggregateInput } from './financial-record-max-order-by-aggregate.input';
import { FinancialRecordMinOrderByAggregateInput } from './financial-record-min-order-by-aggregate.input';
import { FinancialRecordSumOrderByAggregateInput } from './financial-record-sum-order-by-aggregate.input';

@InputType()
export class FinancialRecordOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userRecordsId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => FinancialRecordCountOrderByAggregateInput, { nullable: true })
  _count?: FinancialRecordCountOrderByAggregateInput;

  @Field(() => FinancialRecordAvgOrderByAggregateInput, { nullable: true })
  _avg?: FinancialRecordAvgOrderByAggregateInput;

  @Field(() => FinancialRecordMaxOrderByAggregateInput, { nullable: true })
  _max?: FinancialRecordMaxOrderByAggregateInput;

  @Field(() => FinancialRecordMinOrderByAggregateInput, { nullable: true })
  _min?: FinancialRecordMinOrderByAggregateInput;

  @Field(() => FinancialRecordSumOrderByAggregateInput, { nullable: true })
  _sum?: FinancialRecordSumOrderByAggregateInput;
}
