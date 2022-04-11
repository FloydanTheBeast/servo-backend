import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEmotionalStateFilter } from '../prisma/enum-emotional-state-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRecordRelationFilter } from '../user-record/user-record-relation-filter.input';

@InputType()
export class EmotionalStateRecordWhereInput {
  @Field(() => [EmotionalStateRecordWhereInput], { nullable: true })
  AND?: Array<EmotionalStateRecordWhereInput>;

  @Field(() => [EmotionalStateRecordWhereInput], { nullable: true })
  OR?: Array<EmotionalStateRecordWhereInput>;

  @Field(() => [EmotionalStateRecordWhereInput], { nullable: true })
  NOT?: Array<EmotionalStateRecordWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => EnumEmotionalStateFilter, { nullable: true })
  state?: EnumEmotionalStateFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  date?: DateTimeFilter;

  @Field(() => UserRecordRelationFilter, { nullable: true })
  userRecords?: UserRecordRelationFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  userRecordsId?: StringNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
