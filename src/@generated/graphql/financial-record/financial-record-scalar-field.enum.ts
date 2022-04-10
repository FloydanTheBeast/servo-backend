import { registerEnumType } from '@nestjs/graphql';

export enum FinancialRecordScalarFieldEnum {
  id = 'id',
  type = 'type',
  title = 'title',
  description = 'description',
  amount = 'amount',
  date = 'date',
  userRecordsId = 'userRecordsId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(FinancialRecordScalarFieldEnum, {
  name: 'FinancialRecordScalarFieldEnum',
  description: undefined,
});
