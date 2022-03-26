import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSession {
  @Field(() => String, { nullable: false })
  accessToken: string;

  @Field(() => Number, { nullable: false })
  accessTokenExpiresIn: number;
}
