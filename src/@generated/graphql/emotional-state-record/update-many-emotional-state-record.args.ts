import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmotionalStateRecordUpdateManyMutationInput } from './emotional-state-record-update-many-mutation.input';
import { EmotionalStateRecordWhereInput } from './emotional-state-record-where.input';

@ArgsType()
export class UpdateManyEmotionalStateRecordArgs {
  @Field(() => EmotionalStateRecordUpdateManyMutationInput, { nullable: false })
  data!: EmotionalStateRecordUpdateManyMutationInput;

  @Field(() => EmotionalStateRecordWhereInput, { nullable: true })
  where?: EmotionalStateRecordWhereInput;
}
