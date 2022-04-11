import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmotionalStateRecordWhereUniqueInput } from './emotional-state-record-where-unique.input';

@ArgsType()
export class FindUniqueEmotionalStateRecordArgs {
  @Field(() => EmotionalStateRecordWhereUniqueInput, { nullable: false })
  where!: EmotionalStateRecordWhereUniqueInput;
}
