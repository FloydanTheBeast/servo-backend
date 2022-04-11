import { registerEnumType } from '@nestjs/graphql';

export enum EmotionalState {
  SAD = 'SAD',
  NORMAL = 'NORMAL',
  HAPPY = 'HAPPY',
}

registerEnumType(EmotionalState, {
  name: 'EmotionalState',
  description: undefined,
});
