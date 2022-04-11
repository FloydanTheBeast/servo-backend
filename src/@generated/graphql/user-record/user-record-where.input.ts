import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FinancialRecordListRelationFilter } from '../financial-record/financial-record-list-relation-filter.input';
import { EmotionalStateRecordListRelationFilter } from '../emotional-state-record/emotional-state-record-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserRecordWhereInput {
  @Field(() => [UserRecordWhereInput], { nullable: true })
  AND?: Array<UserRecordWhereInput>;

  @Field(() => [UserRecordWhereInput], { nullable: true })
  OR?: Array<UserRecordWhereInput>;

  @Field(() => [UserRecordWhereInput], { nullable: true })
  NOT?: Array<UserRecordWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => FinancialRecordListRelationFilter, { nullable: true })
  financialRecords?: FinancialRecordListRelationFilter;

  @Field(() => EmotionalStateRecordListRelationFilter, { nullable: true })
  emotionalRecords?: EmotionalStateRecordListRelationFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
