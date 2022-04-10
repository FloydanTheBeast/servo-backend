import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecordWhereInput } from './user-record-where.input';
import { UserRecordOrderByWithAggregationInput } from './user-record-order-by-with-aggregation.input';
import { UserRecordScalarFieldEnum } from './user-record-scalar-field.enum';
import { UserRecordScalarWhereWithAggregatesInput } from './user-record-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserRecordCountAggregateInput } from './user-record-count-aggregate.input';
import { UserRecordAvgAggregateInput } from './user-record-avg-aggregate.input';
import { UserRecordSumAggregateInput } from './user-record-sum-aggregate.input';
import { UserRecordMinAggregateInput } from './user-record-min-aggregate.input';
import { UserRecordMaxAggregateInput } from './user-record-max-aggregate.input';

@ArgsType()
export class UserRecordGroupByArgs {
  @Field(() => UserRecordWhereInput, { nullable: true })
  where?: UserRecordWhereInput;

  @Field(() => [UserRecordOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UserRecordOrderByWithAggregationInput>;

  @Field(() => [UserRecordScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserRecordScalarFieldEnum>;

  @Field(() => UserRecordScalarWhereWithAggregatesInput, { nullable: true })
  having?: UserRecordScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => UserRecordCountAggregateInput, { nullable: true })
  _count?: UserRecordCountAggregateInput;

  @Field(() => UserRecordAvgAggregateInput, { nullable: true })
  _avg?: UserRecordAvgAggregateInput;

  @Field(() => UserRecordSumAggregateInput, { nullable: true })
  _sum?: UserRecordSumAggregateInput;

  @Field(() => UserRecordMinAggregateInput, { nullable: true })
  _min?: UserRecordMinAggregateInput;

  @Field(() => UserRecordMaxAggregateInput, { nullable: true })
  _max?: UserRecordMaxAggregateInput;
}
