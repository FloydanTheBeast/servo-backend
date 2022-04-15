import { Module } from '@nestjs/common';

import { EmotionalRecordModule } from './emotional-state-record';
import { FinancialRecordModule } from './financial-record';
import { RecordResolver } from './record.resolver';
import { RecordService } from './record.service';
import { StepsActivityRecordModule } from './steps-activity-record';

@Module({
  imports: [
    FinancialRecordModule,
    EmotionalRecordModule,
    StepsActivityRecordModule,
  ],
  providers: [RecordService, RecordResolver],
  exports: [RecordResolver],
})
export class RecordModule {}
