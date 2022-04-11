import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EmotionalStateRecordUncheckedCreateNestedManyWithoutUserRecordsInput } from '../emotional-state-record/emotional-state-record-unchecked-create-nested-many-without-user-records.input';

@InputType()
export class UserRecordUncheckedCreateWithoutFinancialRecordsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(
    () => EmotionalStateRecordUncheckedCreateNestedManyWithoutUserRecordsInput,
    { nullable: true },
  )
  emotionalRecords?: EmotionalStateRecordUncheckedCreateNestedManyWithoutUserRecordsInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
