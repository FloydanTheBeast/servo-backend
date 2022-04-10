import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinancialRecordWhereInput } from './financial-record-where.input';
import { FinancialRecordOrderByWithRelationInput } from './financial-record-order-by-with-relation.input';
import { FinancialRecordWhereUniqueInput } from './financial-record-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FinancialRecordCountAggregateInput } from './financial-record-count-aggregate.input';
import { FinancialRecordAvgAggregateInput } from './financial-record-avg-aggregate.input';
import { FinancialRecordSumAggregateInput } from './financial-record-sum-aggregate.input';
import { FinancialRecordMinAggregateInput } from './financial-record-min-aggregate.input';
import { FinancialRecordMaxAggregateInput } from './financial-record-max-aggregate.input';

@ArgsType()
export class FinancialRecordAggregateArgs {
  @Field(() => FinancialRecordWhereInput, { nullable: true })
  where?: FinancialRecordWhereInput;

  @Field(() => [FinancialRecordOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FinancialRecordOrderByWithRelationInput>;

  @Field(() => FinancialRecordWhereUniqueInput, { nullable: true })
  cursor?: FinancialRecordWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => FinancialRecordCountAggregateInput, { nullable: true })
  _count?: FinancialRecordCountAggregateInput;

  @Field(() => FinancialRecordAvgAggregateInput, { nullable: true })
  _avg?: FinancialRecordAvgAggregateInput;

  @Field(() => FinancialRecordSumAggregateInput, { nullable: true })
  _sum?: FinancialRecordSumAggregateInput;

  @Field(() => FinancialRecordMinAggregateInput, { nullable: true })
  _min?: FinancialRecordMinAggregateInput;

  @Field(() => FinancialRecordMaxAggregateInput, { nullable: true })
  _max?: FinancialRecordMaxAggregateInput;
}
