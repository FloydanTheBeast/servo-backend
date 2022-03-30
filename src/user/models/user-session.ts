import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSession {
  @Field(() => String, { nullable: false })
  accessToken: string;

  @Field(() => Number, { nullable: false })
  accessTokenExpiresIn: number;

  @Field(() => String, { nullable: false })
  refreshToken: string;

  @Field(() => Number, { nullable: false })
  refreshTokenExpiresIn: number;
}
