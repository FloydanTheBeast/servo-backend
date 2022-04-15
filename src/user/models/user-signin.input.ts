import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserSigninInput {
  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  username: string;

  @Field(() => String)
  password: string;
}
