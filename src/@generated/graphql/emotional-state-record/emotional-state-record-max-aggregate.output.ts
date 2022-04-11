import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmotionalState } from '../prisma/emotional-state.enum';

@ObjectType()
export class EmotionalStateRecordMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => EmotionalState, { nullable: true })
  state?: keyof typeof EmotionalState;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: true })
  date?: Date | string;

  @Field(() => String, { nullable: true })
  userRecordsId?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
