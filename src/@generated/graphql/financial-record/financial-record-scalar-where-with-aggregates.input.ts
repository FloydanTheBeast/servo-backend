import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumFinancialOperationWithAggregatesFilter } from '../prisma/enum-financial-operation-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FinancialRecordScalarWhereWithAggregatesInput {
  @Field(() => [FinancialRecordScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<FinancialRecordScalarWhereWithAggregatesInput>;

  @Field(() => [FinancialRecordScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<FinancialRecordScalarWhereWithAggregatesInput>;

  @Field(() => [FinancialRecordScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<FinancialRecordScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => EnumFinancialOperationWithAggregatesFilter, { nullable: true })
  type?: EnumFinancialOperationWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  description?: StringNullableWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  amount?: FloatWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date?: DateTimeNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  userRecordsId?: StringNullableWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
