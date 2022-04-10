import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialOperation } from './financial-operation.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFinancialOperationFilter } from './nested-enum-financial-operation-filter.input';

@InputType()
export class NestedEnumFinancialOperationWithAggregatesFilter {
  @Field(() => FinancialOperation, { nullable: true })
  equals?: keyof typeof FinancialOperation;

  @Field(() => [FinancialOperation], { nullable: true })
  in?: Array<keyof typeof FinancialOperation>;

  @Field(() => [FinancialOperation], { nullable: true })
  notIn?: Array<keyof typeof FinancialOperation>;

  @Field(() => NestedEnumFinancialOperationWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumFinancialOperationWithAggregatesFilter;

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter;

  @Field(() => NestedEnumFinancialOperationFilter, { nullable: true })
  _min?: NestedEnumFinancialOperationFilter;

  @Field(() => NestedEnumFinancialOperationFilter, { nullable: true })
  _max?: NestedEnumFinancialOperationFilter;
}
