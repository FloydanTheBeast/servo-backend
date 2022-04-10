import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FinancialOperation } from '../prisma/financial-operation.enum';
import { Float } from '@nestjs/graphql';
import { FinancialRecordCountAggregate } from './financial-record-count-aggregate.output';
import { FinancialRecordAvgAggregate } from './financial-record-avg-aggregate.output';
import { FinancialRecordSumAggregate } from './financial-record-sum-aggregate.output';
import { FinancialRecordMinAggregate } from './financial-record-min-aggregate.output';
import { FinancialRecordMaxAggregate } from './financial-record-max-aggregate.output';

@ObjectType()
export class FinancialRecordGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => FinancialOperation, { nullable: false })
  type!: keyof typeof FinancialOperation;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Float, { nullable: false })
  amount!: number;

  @Field(() => Date, { nullable: true })
  date?: Date | string;

  @Field(() => String, { nullable: true })
  userRecordsId?: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

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
