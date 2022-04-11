import { Module } from '@nestjs/common';

import { EmotionalStateRecordResolver } from './emotional-state-record.resolver';
import { EmotionalStateRecordService } from './emotional-state-record.service';

@Module({
  providers: [EmotionalStateRecordService, EmotionalStateRecordResolver],
  exports: [EmotionalStateRecordResolver],
})
export class EmotionalRecordModule {}
