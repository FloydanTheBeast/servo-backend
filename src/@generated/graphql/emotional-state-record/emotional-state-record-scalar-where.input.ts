import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEmotionalStateFilter } from '../prisma/enum-emotional-state-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EmotionalStateRecordScalarWhereInput {
  @Field(() => [EmotionalStateRecordScalarWhereInput], { nullable: true })
  AND?: Array<EmotionalStateRecordScalarWhereInput>;

  @Field(() => [EmotionalStateRecordScalarWhereInput], { nullable: true })
  OR?: Array<EmotionalStateRecordScalarWhereInput>;

  @Field(() => [EmotionalStateRecordScalarWhereInput], { nullable: true })
  NOT?: Array<EmotionalStateRecordScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => EnumEmotionalStateFilter, { nullable: true })
  state?: EnumEmotionalStateFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  date?: DateTimeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  userRecordsId?: StringNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
