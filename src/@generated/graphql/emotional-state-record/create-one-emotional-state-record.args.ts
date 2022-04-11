import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmotionalStateRecordCreateInput } from './emotional-state-record-create.input';

@ArgsType()
export class CreateOneEmotionalStateRecordArgs {
  @Field(() => EmotionalStateRecordCreateInput, { nullable: false })
  data!: EmotionalStateRecordCreateInput;
}
