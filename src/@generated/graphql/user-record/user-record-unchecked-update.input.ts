import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FinancialRecordUncheckedUpdateManyWithoutUserRecordsInput } from '../financial-record/financial-record-unchecked-update-many-without-user-records.input';
import { EmotionalStateRecordUncheckedUpdateManyWithoutUserRecordsInput } from '../emotional-state-record/emotional-state-record-unchecked-update-many-without-user-records.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserRecordUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  userId?: IntFieldUpdateOperationsInput;

  @Field(() => FinancialRecordUncheckedUpdateManyWithoutUserRecordsInput, {
    nullable: true,
  })
  financialRecords?: FinancialRecordUncheckedUpdateManyWithoutUserRecordsInput;

  @Field(() => EmotionalStateRecordUncheckedUpdateManyWithoutUserRecordsInput, {
    nullable: true,
  })
  emotionalRecords?: EmotionalStateRecordUncheckedUpdateManyWithoutUserRecordsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
