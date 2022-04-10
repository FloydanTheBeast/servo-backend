import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { FinancialRecord } from '../financial-record/financial-record.model';
import { UserRecordCount } from '../user/user-record-count.output';

@ObjectType()
export class UserRecord {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => User, { nullable: false })
  user?: User;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => [FinancialRecord], { nullable: true })
  financialRecords?: Array<FinancialRecord>;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => UserRecordCount, { nullable: false })
  _count?: UserRecordCount;
}
