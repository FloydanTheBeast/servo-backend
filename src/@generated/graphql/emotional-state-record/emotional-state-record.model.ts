import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EmotionalState } from '../prisma/emotional-state.enum';
import { UserRecord } from '../user-record/user-record.model';

@ObjectType()
export class EmotionalStateRecord {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => EmotionalState, { nullable: false })
  state!: keyof typeof EmotionalState;

  @Field(() => String, { nullable: true })
  description!: string | null;

  @Field(() => Date, { nullable: false })
  date!: Date;

  @Field(() => UserRecord, { nullable: true })
  userRecords?: UserRecord | null;

  @Field(() => String, { nullable: true })
  userRecordsId!: string | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
