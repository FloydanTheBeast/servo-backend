import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalState } from './emotional-state.enum';

@InputType()
export class EnumEmotionalStateFieldUpdateOperationsInput {
  @Field(() => EmotionalState, { nullable: true })
  set?: keyof typeof EmotionalState;
}
