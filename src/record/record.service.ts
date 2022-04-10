import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RecordService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserRecordsByUserId(userId: number) {
    if (!userId) {
      throw new HttpException('No userId was provided', HttpStatus.BAD_REQUEST);
    }

    return await this.prismaService.userRecord.findUnique({
      where: { userId },
      include: {
        financialRecords: true,
      },
    });
  }
}
