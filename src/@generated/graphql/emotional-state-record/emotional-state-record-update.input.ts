import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEmotionalStateFieldUpdateOperationsInput } from '../prisma/enum-emotional-state-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserRecordUpdateOneWithoutEmotionalRecordsInput } from '../user-record/user-record-update-one-without-emotional-records.input';

@InputType()
export class EmotionalStateRecordUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => EnumEmotionalStateFieldUpdateOperationsInput, { nullable: true })
  state?: EnumEmotionalStateFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  date?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserRecordUpdateOneWithoutEmotionalRecordsInput, {
    nullable: true,
  })
  userRecords?: UserRecordUpdateOneWithoutEmotionalRecordsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
