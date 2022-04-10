import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinancialRecordWhereInput } from './financial-record-where.input';
import { FinancialRecordOrderByWithRelationInput } from './financial-record-order-by-with-relation.input';
import { FinancialRecordWhereUniqueInput } from './financial-record-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FinancialRecordScalarFieldEnum } from './financial-record-scalar-field.enum';

@ArgsType()
export class FindFirstFinancialRecordArgs {
  @Field(() => FinancialRecordWhereInput, { nullable: true })
  where?: FinancialRecordWhereInput;

  @Field(() => [FinancialRecordOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FinancialRecordOrderByWithRelationInput>;

  @Field(() => FinancialRecordWhereUniqueInput, { nullable: true })
  cursor?: FinancialRecordWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [FinancialRecordScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FinancialRecordScalarFieldEnum>;
}
