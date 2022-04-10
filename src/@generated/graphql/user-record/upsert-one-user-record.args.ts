import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';
import { UserRecordCreateInput } from './user-record-create.input';
import { UserRecordUpdateInput } from './user-record-update.input';

@ArgsType()
export class UpsertOneUserRecordArgs {
  @Field(() => UserRecordWhereUniqueInput, { nullable: false })
  where!: UserRecordWhereUniqueInput;

  @Field(() => UserRecordCreateInput, { nullable: false })
  create!: UserRecordCreateInput;

  @Field(() => UserRecordUpdateInput, { nullable: false })
  update!: UserRecordUpdateInput;
}
