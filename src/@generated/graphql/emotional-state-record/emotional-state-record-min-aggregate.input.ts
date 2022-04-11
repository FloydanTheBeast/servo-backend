import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EmotionalStateRecordMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  state?: true;

  @Field(() => Boolean, { nullable: true })
  description?: true;

  @Field(() => Boolean, { nullable: true })
  date?: true;

  @Field(() => Boolean, { nullable: true })
  userRecordsId?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}
