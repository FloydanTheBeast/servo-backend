import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalState } from './emotional-state.enum';
import { NestedEnumEmotionalStateFilter } from './nested-enum-emotional-state-filter.input';

@InputType()
export class EnumEmotionalStateFilter {
  @Field(() => EmotionalState, { nullable: true })
  equals?: keyof typeof EmotionalState;

  @Field(() => [EmotionalState], { nullable: true })
  in?: Array<keyof typeof EmotionalState>;

  @Field(() => [EmotionalState], { nullable: true })
  notIn?: Array<keyof typeof EmotionalState>;

  @Field(() => NestedEnumEmotionalStateFilter, { nullable: true })
  not?: NestedEnumEmotionalStateFilter;
}
