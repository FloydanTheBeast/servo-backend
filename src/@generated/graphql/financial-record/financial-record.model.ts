import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FinancialOperation } from '../prisma/financial-operation.enum';
import { Float } from '@nestjs/graphql';
import { UserRecord } from '../user-record/user-record.model';

@ObjectType()
export class FinancialRecord {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => FinancialOperation, { nullable: false })
  type!: keyof typeof FinancialOperation;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;

  @Field(() => Float, { nullable: false })
  amount!: number;

  @Field(() => Date, { nullable: true })
  date!: Date | null;

  @Field(() => UserRecord, { nullable: true })
  userRecords?: UserRecord | null;

  @Field(() => String, { nullable: true })
  userRecordsId!: string | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
