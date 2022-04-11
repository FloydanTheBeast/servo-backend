import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalStateRecordScalarWhereInput } from './emotional-state-record-scalar-where.input';
import { EmotionalStateRecordUpdateManyMutationInput } from './emotional-state-record-update-many-mutation.input';

@InputType()
export class EmotionalStateRecordUpdateManyWithWhereWithoutUserRecordsInput {
  @Field(() => EmotionalStateRecordScalarWhereInput, { nullable: false })
  where!: EmotionalStateRecordScalarWhereInput;

  @Field(() => EmotionalStateRecordUpdateManyMutationInput, { nullable: false })
  data!: EmotionalStateRecordUpdateManyMutationInput;
}
