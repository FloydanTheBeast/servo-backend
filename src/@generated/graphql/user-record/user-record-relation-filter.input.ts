import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecordWhereInput } from './user-record-where.input';

@InputType()
export class UserRecordRelationFilter {
  @Field(() => UserRecordWhereInput, { nullable: true })
  is?: UserRecordWhereInput;

  @Field(() => UserRecordWhereInput, { nullable: true })
  isNot?: UserRecordWhereInput;
}
