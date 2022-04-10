import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinancialRecordCreateManyInput } from './financial-record-create-many.input';

@ArgsType()
export class CreateManyFinancialRecordArgs {
  @Field(() => [FinancialRecordCreateManyInput], { nullable: false })
  data!: Array<FinancialRecordCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
