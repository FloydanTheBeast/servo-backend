import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EmotionalStateRecordCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  state!: number;

  @Field(() => Int, { nullable: false })
  description!: number;

  @Field(() => Int, { nullable: false })
  date!: number;

  @Field(() => Int, { nullable: false })
  userRecordsId!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
