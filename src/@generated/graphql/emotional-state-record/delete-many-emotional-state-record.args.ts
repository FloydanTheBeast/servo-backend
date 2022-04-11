import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmotionalStateRecordWhereInput } from './emotional-state-record-where.input';

@ArgsType()
export class DeleteManyEmotionalStateRecordArgs {
  @Field(() => EmotionalStateRecordWhereInput, { nullable: true })
  where?: EmotionalStateRecordWhereInput;
}
