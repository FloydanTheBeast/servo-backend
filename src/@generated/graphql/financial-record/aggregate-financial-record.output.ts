import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FinancialRecordCountAggregate } from './financial-record-count-aggregate.output';
import { FinancialRecordAvgAggregate } from './financial-record-avg-aggregate.output';
import { FinancialRecordSumAggregate } from './financial-record-sum-aggregate.output';
import { FinancialRecordMinAggregate } from './financial-record-min-aggregate.output';
import { FinancialRecordMaxAggregate } from './financial-record-max-aggregate.output';

@ObjectType()
export class AggregateFinancialRecord {
  @Field(() => FinancialRecordCountAggregate, { nullable: true })
  _count?: FinancialRecordCountAggregate;

  @Field(() => FinancialRecordAvgAggregate, { nullable: true })
  _avg?: FinancialRecordAvgAggregate;

  @Field(() => FinancialRecordSumAggregate, { nullable: true })
  _sum?: FinancialRecordSumAggregate;

  @Field(() => FinancialRecordMinAggregate, { nullable: true })
  _min?: FinancialRecordMinAggregate;

  @Field(() => FinancialRecordMaxAggregate, { nullable: true })
  _max?: FinancialRecordMaxAggregate;
}
