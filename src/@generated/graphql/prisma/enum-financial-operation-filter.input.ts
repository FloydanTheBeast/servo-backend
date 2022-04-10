import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialOperation } from './financial-operation.enum';
import { NestedEnumFinancialOperationFilter } from './nested-enum-financial-operation-filter.input';

@InputType()
export class EnumFinancialOperationFilter {
  @Field(() => FinancialOperation, { nullable: true })
  equals?: keyof typeof FinancialOperation;

  @Field(() => [FinancialOperation], { nullable: true })
  in?: Array<keyof typeof FinancialOperation>;

  @Field(() => [FinancialOperation], { nullable: true })
  notIn?: Array<keyof typeof FinancialOperation>;

  @Field(() => NestedEnumFinancialOperationFilter, { nullable: true })
  not?: NestedEnumFinancialOperationFilter;
}
