import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';
import { UserSigninInput } from './models';
import { Maybe } from 'graphql/jsutils/Maybe';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.prismaService.user.create({
      data: { ...data, password: hashedPassword },
    });
  }

  async findByCredentials({
    email,
    password,
  }: UserSigninInput): Promise<Maybe<User>> {
    const user = await this.prismaService.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return null;
    }

    return user;
  }
}
