import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRecordsInput } from '../user/user-update-one-required-without-records.input';
import { EmotionalStateRecordUpdateManyWithoutUserRecordsInput } from '../emotional-state-record/emotional-state-record-update-many-without-user-records.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserRecordUpdateWithoutFinancialRecordsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutRecordsInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutRecordsInput;

  @Field(() => EmotionalStateRecordUpdateManyWithoutUserRecordsInput, {
    nullable: true,
  })
  emotionalRecords?: EmotionalStateRecordUpdateManyWithoutUserRecordsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
