import { registerEnumType } from '@nestjs/graphql';

export enum EmotionalStateRecordScalarFieldEnum {
  id = 'id',
  state = 'state',
  description = 'description',
  date = 'date',
  userRecordsId = 'userRecordsId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(EmotionalStateRecordScalarFieldEnum, {
  name: 'EmotionalStateRecordScalarFieldEnum',
  description: undefined,
});
