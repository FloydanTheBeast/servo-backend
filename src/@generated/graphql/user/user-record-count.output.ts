import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserRecordCount {
  @Field(() => Int, { nullable: false })
  financialRecords?: number;

  @Field(() => Int, { nullable: false })
  emotionalRecords?: number;
}
