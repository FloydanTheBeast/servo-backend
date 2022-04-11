import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { FinancialRecordOrderByRelationAggregateInput } from '../financial-record/financial-record-order-by-relation-aggregate.input';
import { EmotionalStateRecordOrderByRelationAggregateInput } from '../emotional-state-record/emotional-state-record-order-by-relation-aggregate.input';

@InputType()
export class UserRecordOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;

  @Field(() => FinancialRecordOrderByRelationAggregateInput, { nullable: true })
  financialRecords?: FinancialRecordOrderByRelationAggregateInput;

  @Field(() => EmotionalStateRecordOrderByRelationAggregateInput, {
    nullable: true,
  })
  emotionalRecords?: EmotionalStateRecordOrderByRelationAggregateInput;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}
