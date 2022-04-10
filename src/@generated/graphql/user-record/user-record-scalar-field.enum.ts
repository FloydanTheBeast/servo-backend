import { registerEnumType } from '@nestjs/graphql';

export enum UserRecordScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(UserRecordScalarFieldEnum, {
  name: 'UserRecordScalarFieldEnum',
  description: undefined,
});
