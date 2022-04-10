import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecordWhereInput } from './user-record-where.input';

@ArgsType()
export class DeleteManyUserRecordArgs {
  @Field(() => UserRecordWhereInput, { nullable: true })
  where?: UserRecordWhereInput;
}
