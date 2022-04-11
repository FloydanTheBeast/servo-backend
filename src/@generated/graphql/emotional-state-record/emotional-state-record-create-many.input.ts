import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmotionalState } from '../prisma/emotional-state.enum';

@InputType()
export class EmotionalStateRecordCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => EmotionalState, { nullable: false })
  state!: keyof typeof EmotionalState;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: false })
  date!: Date | string;

  @Field(() => String, { nullable: true })
  userRecordsId?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
