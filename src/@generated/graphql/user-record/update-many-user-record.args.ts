import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecordUpdateManyMutationInput } from './user-record-update-many-mutation.input';
import { UserRecordWhereInput } from './user-record-where.input';

@ArgsType()
export class UpdateManyUserRecordArgs {
  @Field(() => UserRecordUpdateManyMutationInput, { nullable: false })
  data!: UserRecordUpdateManyMutationInput;

  @Field(() => UserRecordWhereInput, { nullable: true })
  where?: UserRecordWhereInput;
}
