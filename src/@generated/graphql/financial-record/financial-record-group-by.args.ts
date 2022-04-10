import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinancialRecordWhereInput } from './financial-record-where.input';
import { FinancialRecordOrderByWithAggregationInput } from './financial-record-order-by-with-aggregation.input';
import { FinancialRecordScalarFieldEnum } from './financial-record-scalar-field.enum';
import { FinancialRecordScalarWhereWithAggregatesInput } from './financial-record-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FinancialRecordCountAggregateInput } from './financial-record-count-aggregate.input';
import { FinancialRecordAvgAggregateInput } from './financial-record-avg-aggregate.input';
import { FinancialRecordSumAggregateInput } from './financial-record-sum-aggregate.input';
import { FinancialRecordMinAggregateInput } from './financial-record-min-aggregate.input';
import { FinancialRecordMaxAggregateInput } from './financial-record-max-aggregate.input';

@ArgsType()
export class FinancialRecordGroupByArgs {
  @Field(() => FinancialRecordWhereInput, { nullable: true })
  where?: FinancialRecordWhereInput;

  @Field(() => [FinancialRecordOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<FinancialRecordOrderByWithAggregationInput>;

  @Field(() => [FinancialRecordScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof FinancialRecordScalarFieldEnum>;

  @Field(() => FinancialRecordScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: FinancialRecordScalarWhereWithAggregatesInput;

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
