import { Module } from '@nestjs/common';

import { StepsActivityRecordResolver } from './steps-activity-record.resolver';
import { StepsActivityRecordService } from './steps-activity-record.service';

@Module({
  providers: [StepsActivityRecordService, StepsActivityRecordResolver],
  exports: [StepsActivityRecordResolver],
})
export class StepsActivityRecordModule {}
