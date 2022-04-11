import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmotionalStateRecordWhereInput } from './emotional-state-record-where.input';
import { EmotionalStateRecordOrderByWithRelationInput } from './emotional-state-record-order-by-with-relation.input';
import { EmotionalStateRecordWhereUniqueInput } from './emotional-state-record-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmotionalStateRecordCountAggregateInput } from './emotional-state-record-count-aggregate.input';
import { EmotionalStateRecordMinAggregateInput } from './emotional-state-record-min-aggregate.input';
import { EmotionalStateRecordMaxAggregateInput } from './emotional-state-record-max-aggregate.input';

@ArgsType()
export class EmotionalStateRecordAggregateArgs {
  @Field(() => EmotionalStateRecordWhereInput, { nullable: true })
  where?: EmotionalStateRecordWhereInput;

  @Field(() => [EmotionalStateRecordOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: Array<EmotionalStateRecordOrderByWithRelationInput>;

  @Field(() => EmotionalStateRecordWhereUniqueInput, { nullable: true })
  cursor?: EmotionalStateRecordWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => EmotionalStateRecordCountAggregateInput, { nullable: true })
  _count?: EmotionalStateRecordCountAggregateInput;

  @Field(() => EmotionalStateRecordMinAggregateInput, { nullable: true })
  _min?: EmotionalStateRecordMinAggregateInput;

  @Field(() => EmotionalStateRecordMaxAggregateInput, { nullable: true })
  _max?: EmotionalStateRecordMaxAggregateInput;
}
