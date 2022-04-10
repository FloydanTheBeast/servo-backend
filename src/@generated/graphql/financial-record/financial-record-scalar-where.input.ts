import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumFinancialOperationFilter } from '../prisma/enum-financial-operation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FinancialRecordScalarWhereInput {
  @Field(() => [FinancialRecordScalarWhereInput], { nullable: true })
  AND?: Array<FinancialRecordScalarWhereInput>;

  @Field(() => [FinancialRecordScalarWhereInput], { nullable: true })
  OR?: Array<FinancialRecordScalarWhereInput>;

  @Field(() => [FinancialRecordScalarWhereInput], { nullable: true })
  NOT?: Array<FinancialRecordScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => EnumFinancialOperationFilter, { nullable: true })
  type?: EnumFinancialOperationFilter;

  @Field(() => StringFilter, { nullable: true })
  title?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter;

  @Field(() => FloatFilter, { nullable: true })
  amount?: FloatFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date?: DateTimeNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  userRecordsId?: StringNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
