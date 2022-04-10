import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserRecordScalarWhereWithAggregatesInput {
  @Field(() => [UserRecordScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserRecordScalarWhereWithAggregatesInput>;

  @Field(() => [UserRecordScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserRecordScalarWhereWithAggregatesInput>;

  @Field(() => [UserRecordScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserRecordScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  userId?: IntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
