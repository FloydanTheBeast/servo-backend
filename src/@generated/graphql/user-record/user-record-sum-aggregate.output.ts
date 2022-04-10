import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserRecordSumAggregate {
  @Field(() => Int, { nullable: true })
  userId?: number;
}
