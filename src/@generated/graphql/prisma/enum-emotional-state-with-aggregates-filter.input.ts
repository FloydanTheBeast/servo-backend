import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalState } from './emotional-state.enum';
import { NestedEnumEmotionalStateWithAggregatesFilter } from './nested-enum-emotional-state-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEmotionalStateFilter } from './nested-enum-emotional-state-filter.input';

@InputType()
export class EnumEmotionalStateWithAggregatesFilter {
  @Field(() => EmotionalState, { nullable: true })
  equals?: keyof typeof EmotionalState;

  @Field(() => [EmotionalState], { nullable: true })
  in?: Array<keyof typeof EmotionalState>;

  @Field(() => [EmotionalState], { nullable: true })
  notIn?: Array<keyof typeof EmotionalState>;

  @Field(() => NestedEnumEmotionalStateWithAggregatesFilter, { nullable: true })
  not?: NestedEnumEmotionalStateWithAggregatesFilter;

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter;

  @Field(() => NestedEnumEmotionalStateFilter, { nullable: true })
  _min?: NestedEnumEmotionalStateFilter;

  @Field(() => NestedEnumEmotionalStateFilter, { nullable: true })
  _max?: NestedEnumEmotionalStateFilter;
}
