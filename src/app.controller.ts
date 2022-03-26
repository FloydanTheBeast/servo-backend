import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
