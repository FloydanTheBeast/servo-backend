import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecordCreateInput } from './user-record-create.input';

@ArgsType()
export class CreateOneUserRecordArgs {
  @Field(() => UserRecordCreateInput, { nullable: false })
  data!: UserRecordCreateInput;
}
