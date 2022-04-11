import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmotionalStateRecordWhereInput } from './emotional-state-record-where.input';
import { EmotionalStateRecordOrderByWithRelationInput } from './emotional-state-record-order-by-with-relation.input';
import { EmotionalStateRecordWhereUniqueInput } from './emotional-state-record-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmotionalStateRecordScalarFieldEnum } from './emotional-state-record-scalar-field.enum';

@ArgsType()
export class FindFirstEmotionalStateRecordArgs {
  @Field(() => EmotionalStateRecordWhereInput, { nullable: true })
  where?: EmotionalStateRecordWhereInput;

  @Field(() => [EmotionalStateRecordOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: Array<EmotionalStateRecordOrderByWithRelationInput>;

  @Field(() => EmotionalStateRecordWhereUniqueInput, { nullable: true })
  cursor?: EmotionalStateRecordWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [EmotionalStateRecordScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof EmotionalStateRecordScalarFieldEnum>;
}
