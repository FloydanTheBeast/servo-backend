import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalStateRecordWhereInput } from './emotional-state-record-where.input';

@InputType()
export class EmotionalStateRecordListRelationFilter {
  @Field(() => EmotionalStateRecordWhereInput, { nullable: true })
  every?: EmotionalStateRecordWhereInput;

  @Field(() => EmotionalStateRecordWhereInput, { nullable: true })
  some?: EmotionalStateRecordWhereInput;

  @Field(() => EmotionalStateRecordWhereInput, { nullable: true })
  none?: EmotionalStateRecordWhereInput;
}
