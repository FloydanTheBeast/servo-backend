import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  email?: true;

  @Field(() => Boolean, { nullable: true })
  username?: true;

  @Field(() => Boolean, { nullable: true })
  password?: true;

  @Field(() => Boolean, { nullable: true })
  firstName?: true;

  @Field(() => Boolean, { nullable: true })
  lastName?: true;

  @Field(() => Boolean, { nullable: true })
  birthDate?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}
