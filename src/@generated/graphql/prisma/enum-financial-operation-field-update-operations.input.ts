import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialOperation } from './financial-operation.enum';

@InputType()
export class EnumFinancialOperationFieldUpdateOperationsInput {
  @Field(() => FinancialOperation, { nullable: true })
  set?: keyof typeof FinancialOperation;
}
