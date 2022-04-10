import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';

@ArgsType()
export class FindUniqueUserRecordArgs {
  @Field(() => UserRecordWhereUniqueInput, { nullable: false })
  where!: UserRecordWhereUniqueInput;
}
