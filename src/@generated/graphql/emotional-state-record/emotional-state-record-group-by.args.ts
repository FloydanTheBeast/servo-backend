import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmotionalStateRecordWhereInput } from './emotional-state-record-where.input';
import { EmotionalStateRecordOrderByWithAggregationInput } from './emotional-state-record-order-by-with-aggregation.input';
import { EmotionalStateRecordScalarFieldEnum } from './emotional-state-record-scalar-field.enum';
import { EmotionalStateRecordScalarWhereWithAggregatesInput } from './emotional-state-record-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EmotionalStateRecordCountAggregateInput } from './emotional-state-record-count-aggregate.input';
import { EmotionalStateRecordMinAggregateInput } from './emotional-state-record-min-aggregate.input';
import { EmotionalStateRecordMaxAggregateInput } from './emotional-state-record-max-aggregate.input';

@ArgsType()
export class EmotionalStateRecordGroupByArgs {
  @Field(() => EmotionalStateRecordWhereInput, { nullable: true })
  where?: EmotionalStateRecordWhereInput;

  @Field(() => [EmotionalStateRecordOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<EmotionalStateRecordOrderByWithAggregationInput>;

  @Field(() => [EmotionalStateRecordScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof EmotionalStateRecordScalarFieldEnum>;

  @Field(() => EmotionalStateRecordScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: EmotionalStateRecordScalarWhereWithAggregatesInput;

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
