import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserRecordSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
}
