import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FinancialRecordAvgAggregate {
  @Field(() => Float, { nullable: true })
  amount?: number;
}
