import { registerEnumType } from '@nestjs/graphql';

export enum FinancialOperation {
  LOAN = 'LOAN',
  DEBT = 'DEBT',
}

registerEnumType(FinancialOperation, {
  name: 'FinancialOperation',
  description: undefined,
});
