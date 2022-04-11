import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FinancialRecordUpdateManyWithoutUserRecordsInput } from '../financial-record/financial-record-update-many-without-user-records.input';
import { EmotionalStateRecordUpdateManyWithoutUserRecordsInput } from '../emotional-state-record/emotional-state-record-update-many-without-user-records.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserRecordUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => FinancialRecordUpdateManyWithoutUserRecordsInput, {
    nullable: true,
  })
  financialRecords?: FinancialRecordUpdateManyWithoutUserRecordsInput;

  @Field(() => EmotionalStateRecordUpdateManyWithoutUserRecordsInput, {
    nullable: true,
  })
  emotionalRecords?: EmotionalStateRecordUpdateManyWithoutUserRecordsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
