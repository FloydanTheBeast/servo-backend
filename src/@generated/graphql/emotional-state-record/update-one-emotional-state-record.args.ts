import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmotionalStateRecordUpdateInput } from './emotional-state-record-update.input';
import { EmotionalStateRecordWhereUniqueInput } from './emotional-state-record-where-unique.input';

@ArgsType()
export class UpdateOneEmotionalStateRecordArgs {
  @Field(() => EmotionalStateRecordUpdateInput, { nullable: false })
  data!: EmotionalStateRecordUpdateInput;

  @Field(() => EmotionalStateRecordWhereUniqueInput, { nullable: false })
  where!: EmotionalStateRecordWhereUniqueInput;
}
