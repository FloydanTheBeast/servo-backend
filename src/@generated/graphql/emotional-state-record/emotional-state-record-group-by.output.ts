import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmotionalState } from '../prisma/emotional-state.enum';
import { EmotionalStateRecordCountAggregate } from './emotional-state-record-count-aggregate.output';
import { EmotionalStateRecordMinAggregate } from './emotional-state-record-min-aggregate.output';
import { EmotionalStateRecordMaxAggregate } from './emotional-state-record-max-aggregate.output';

@ObjectType()
export class EmotionalStateRecordGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => EmotionalState, { nullable: false })
  state!: keyof typeof EmotionalState;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: false })
  date!: Date | string;

  @Field(() => String, { nullable: true })
  userRecordsId?: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => EmotionalStateRecordCountAggregate, { nullable: true })
  _count?: EmotionalStateRecordCountAggregate;

  @Field(() => EmotionalStateRecordMinAggregate, { nullable: true })
  _min?: EmotionalStateRecordMinAggregate;

  @Field(() => EmotionalStateRecordMaxAggregate, { nullable: true })
  _max?: EmotionalStateRecordMaxAggregate;
}
