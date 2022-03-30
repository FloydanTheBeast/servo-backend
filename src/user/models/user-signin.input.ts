import { InputType, PickType } from '@nestjs/graphql';

import { UserCreateInput } from 'src/@generated/graphql/user/user-create.input';

@InputType()
export class UserSigninInput extends PickType(UserCreateInput, [
  'email',
  'password',
]) {}
