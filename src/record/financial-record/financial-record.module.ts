import { Module } from '@nestjs/common';

import { FinancialRecordResolver } from './financial-record.resolver';
import { FinancialRecordService } from './financial-record.service';

@Module({
  providers: [FinancialRecordService, FinancialRecordResolver],
  exports: [FinancialRecordResolver],
})
export class FinancialRecordModule {}
