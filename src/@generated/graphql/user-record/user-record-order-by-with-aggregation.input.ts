import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserRecordCountOrderByAggregateInput } from './user-record-count-order-by-aggregate.input';
import { UserRecordAvgOrderByAggregateInput } from './user-record-avg-order-by-aggregate.input';
import { UserRecordMaxOrderByAggregateInput } from './user-record-max-order-by-aggregate.input';
import { UserRecordMinOrderByAggregateInput } from './user-record-min-order-by-aggregate.input';
import { UserRecordSumOrderByAggregateInput } from './user-record-sum-order-by-aggregate.input';

@InputType()
export class UserRecordOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => UserRecordCountOrderByAggregateInput, { nullable: true })
  _count?: UserRecordCountOrderByAggregateInput;

  @Field(() => UserRecordAvgOrderByAggregateInput, { nullable: true })
  _avg?: UserRecordAvgOrderByAggregateInput;

  @Field(() => UserRecordMaxOrderByAggregateInput, { nullable: true })
  _max?: UserRecordMaxOrderByAggregateInput;

  @Field(() => UserRecordMinOrderByAggregateInput, { nullable: true })
  _min?: UserRecordMinOrderByAggregateInput;

  @Field(() => UserRecordSumOrderByAggregateInput, { nullable: true })
  _sum?: UserRecordSumOrderByAggregateInput;
}
