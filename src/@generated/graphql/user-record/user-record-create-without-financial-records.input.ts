import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRecordsInput } from '../user/user-create-nested-one-without-records.input';
import { EmotionalStateRecordCreateNestedManyWithoutUserRecordsInput } from '../emotional-state-record/emotional-state-record-create-nested-many-without-user-records.input';

@InputType()
export class UserRecordCreateWithoutFinancialRecordsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => UserCreateNestedOneWithoutRecordsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutRecordsInput;

  @Field(() => EmotionalStateRecordCreateNestedManyWithoutUserRecordsInput, {
    nullable: true,
  })
  emotionalRecords?: EmotionalStateRecordCreateNestedManyWithoutUserRecordsInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
