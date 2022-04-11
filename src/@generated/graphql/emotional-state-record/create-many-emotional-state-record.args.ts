import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmotionalStateRecordCreateManyInput } from './emotional-state-record-create-many.input';

@ArgsType()
export class CreateManyEmotionalStateRecordArgs {
  @Field(() => [EmotionalStateRecordCreateManyInput], { nullable: false })
  data!: Array<EmotionalStateRecordCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
