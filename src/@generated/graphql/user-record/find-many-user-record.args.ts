import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecordWhereInput } from './user-record-where.input';
import { UserRecordOrderByWithRelationInput } from './user-record-order-by-with-relation.input';
import { UserRecordWhereUniqueInput } from './user-record-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRecordScalarFieldEnum } from './user-record-scalar-field.enum';

@ArgsType()
export class FindManyUserRecordArgs {
  @Field(() => UserRecordWhereInput, { nullable: true })
  where?: UserRecordWhereInput;

  @Field(() => [UserRecordOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserRecordOrderByWithRelationInput>;

  @Field(() => UserRecordWhereUniqueInput, { nullable: true })
  cursor?: UserRecordWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [UserRecordScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserRecordScalarFieldEnum>;
}
