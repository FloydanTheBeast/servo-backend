import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserRecordAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  userId?: true;
}
