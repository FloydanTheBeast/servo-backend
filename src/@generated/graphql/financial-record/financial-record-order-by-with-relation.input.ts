import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserRecordOrderByWithRelationInput } from '../user-record/user-record-order-by-with-relation.input';

@InputType()
export class FinancialRecordOrderByWithRelationInput {
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

  @Field(() => UserRecordOrderByWithRelationInput, { nullable: true })
  userRecords?: UserRecordOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  userRecordsId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}