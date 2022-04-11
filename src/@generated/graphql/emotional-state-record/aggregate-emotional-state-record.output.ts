import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmotionalStateRecordCountAggregate } from './emotional-state-record-count-aggregate.output';
import { EmotionalStateRecordMinAggregate } from './emotional-state-record-min-aggregate.output';
import { EmotionalStateRecordMaxAggregate } from './emotional-state-record-max-aggregate.output';

@ObjectType()
export class AggregateEmotionalStateRecord {
  @Field(() => EmotionalStateRecordCountAggregate, { nullable: true })
  _count?: EmotionalStateRecordCountAggregate;

  @Field(() => EmotionalStateRecordMinAggregate, { nullable: true })
  _min?: EmotionalStateRecordMinAggregate;

  @Field(() => EmotionalStateRecordMaxAggregate, { nullable: true })
  _max?: EmotionalStateRecordMaxAggregate;
}
