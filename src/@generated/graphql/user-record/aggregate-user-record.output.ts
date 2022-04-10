import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserRecordCountAggregate } from './user-record-count-aggregate.output';
import { UserRecordAvgAggregate } from './user-record-avg-aggregate.output';
import { UserRecordSumAggregate } from './user-record-sum-aggregate.output';
import { UserRecordMinAggregate } from './user-record-min-aggregate.output';
import { UserRecordMaxAggregate } from './user-record-max-aggregate.output';

@ObjectType()
export class AggregateUserRecord {
  @Field(() => UserRecordCountAggregate, { nullable: true })
  _count?: UserRecordCountAggregate;

  @Field(() => UserRecordAvgAggregate, { nullable: true })
  _avg?: UserRecordAvgAggregate;

  @Field(() => UserRecordSumAggregate, { nullable: true })
  _sum?: UserRecordSumAggregate;

  @Field(() => UserRecordMinAggregate, { nullable: true })
  _min?: UserRecordMinAggregate;

  @Field(() => UserRecordMaxAggregate, { nullable: true })
  _max?: UserRecordMaxAggregate;
}