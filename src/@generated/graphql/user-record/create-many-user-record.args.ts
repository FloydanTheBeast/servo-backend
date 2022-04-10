import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecordCreateManyInput } from './user-record-create-many.input';

@ArgsType()
export class CreateManyUserRecordArgs {
  @Field(() => [UserRecordCreateManyInput], { nullable: false })
  data!: Array<UserRecordCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
