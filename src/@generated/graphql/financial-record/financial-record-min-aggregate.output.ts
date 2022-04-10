import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FinancialOperation } from '../prisma/financial-operation.enum';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FinancialRecordMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => FinancialOperation, { nullable: true })
  type?: keyof typeof FinancialOperation;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Float, { nullable: true })
  amount?: number;

  @Field(() => Date, { nullable: true })
  date?: Date | string;

  @Field(() => String, { nullable: true })
  userRecordsId?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
