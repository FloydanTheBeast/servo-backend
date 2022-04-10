import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecordWhereInput } from './user-record-where.input';
import { UserRecordOrderByWithRelationInput } from './user-record-order-by-with-relation.input';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRecordCountAggregateInput } from './user-record-count-aggregate.input';
import { UserRecordAvgAggregateInput } from './user-record-avg-aggregate.input';
import { UserRecordSumAggregateInput } from './user-record-sum-aggregate.input';
import { UserRecordMinAggregateInput } from './user-record-min-aggregate.input';
import { UserRecordMaxAggregateInput } from './user-record-max-aggregate.input';

@ArgsType()
export class UserRecordAggregateArgs {
  @Field(() => UserRecordWhereInput, { nullable: true })
  where?: UserRecordWhereInput;

  @Field(() => [UserRecordOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserRecordOrderByWithRelationInput>;

  @Field(() => UserRecordWhereUniqueInput, { nullable: true })
  cursor?: UserRecordWhereUniqueInput;

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
