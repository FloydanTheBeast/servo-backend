import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  email = 'email',
  username = 'username',
  password = 'password',
  firstName = 'firstName',
  lastName = 'lastName',
  birthDate = 'birthDate',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
