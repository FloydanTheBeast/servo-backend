import { Module } from '@nestjs/common';

import { FinancialRecordModule } from './financial-record';
import { RecordResolver } from './record.resolver';
import { RecordService } from './record.service';

@Module({
  imports: [FinancialRecordModule],
  providers: [RecordService, RecordResolver],
  exports: [RecordResolver],
})
export class RecordModule {}
