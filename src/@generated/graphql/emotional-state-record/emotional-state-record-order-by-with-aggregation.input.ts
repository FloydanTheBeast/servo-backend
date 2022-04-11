import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EmotionalStateRecordCountOrderByAggregateInput } from './emotional-state-record-count-order-by-aggregate.input';
import { EmotionalStateRecordMaxOrderByAggregateInput } from './emotional-state-record-max-order-by-aggregate.input';
import { EmotionalStateRecordMinOrderByAggregateInput } from './emotional-state-record-min-order-by-aggregate.input';

@InputType()
export class EmotionalStateRecordOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  state?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userRecordsId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => EmotionalStateRecordCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: EmotionalStateRecordCountOrderByAggregateInput;

  @Field(() => EmotionalStateRecordMaxOrderByAggregateInput, { nullable: true })
  _max?: EmotionalStateRecordMaxOrderByAggregateInput;

  @Field(() => EmotionalStateRecordMinOrderByAggregateInput, { nullable: true })
  _min?: EmotionalStateRecordMinOrderByAggregateInput;
}
