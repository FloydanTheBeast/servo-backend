import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmotionalStateRecordWhereUniqueInput } from './emotional-state-record-where-unique.input';
import { EmotionalStateRecordCreateInput } from './emotional-state-record-create.input';
import { EmotionalStateRecordUpdateInput } from './emotional-state-record-update.input';

@ArgsType()
export class UpsertOneEmotionalStateRecordArgs {
  @Field(() => EmotionalStateRecordWhereUniqueInput, { nullable: false })
  where!: EmotionalStateRecordWhereUniqueInput;

  @Field(() => EmotionalStateRecordCreateInput, { nullable: false })
  create!: EmotionalStateRecordCreateInput;

  @Field(() => EmotionalStateRecordUpdateInput, { nullable: false })
  update!: EmotionalStateRecordUpdateInput;
}
