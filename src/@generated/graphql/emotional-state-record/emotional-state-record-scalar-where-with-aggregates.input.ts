import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumEmotionalStateWithAggregatesFilter } from '../prisma/enum-emotional-state-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class EmotionalStateRecordScalarWhereWithAggregatesInput {
  @Field(() => [EmotionalStateRecordScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<EmotionalStateRecordScalarWhereWithAggregatesInput>;

  @Field(() => [EmotionalStateRecordScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<EmotionalStateRecordScalarWhereWithAggregatesInput>;

  @Field(() => [EmotionalStateRecordScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<EmotionalStateRecordScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => EnumEmotionalStateWithAggregatesFilter, { nullable: true })
  state?: EnumEmotionalStateWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  description?: StringNullableWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  date?: DateTimeWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  userRecordsId?: StringNullableWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
