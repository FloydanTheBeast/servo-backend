import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FinancialOperation } from '../prisma/financial-operation.enum';
import { Float } from '@nestjs/graphql';

@InputType()
export class FinancialRecordCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => FinancialOperation, { nullable: false })
  type!: keyof typeof FinancialOperation;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Float, { nullable: false })
  amount!: number;

  @Field(() => Date, { nullable: true })
  date?: Date | string;

  @Field(() => String, { nullable: true })
  userRecordsId?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
