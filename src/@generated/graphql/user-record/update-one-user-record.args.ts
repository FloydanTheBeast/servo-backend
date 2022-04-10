import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecordUpdateInput } from './user-record-update.input';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';

@ArgsType()
export class UpdateOneUserRecordArgs {
  @Field(() => UserRecordUpdateInput, { nullable: false })
  data!: UserRecordUpdateInput;

  @Field(() => UserRecordWhereUniqueInput, { nullable: false })
  where!: UserRecordWhereUniqueInput;
}
