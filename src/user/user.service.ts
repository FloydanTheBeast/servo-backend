import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'nestjs-prisma';

import { UserSigninInput } from './models';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserById(id: number) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async create(data: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    try {
      const user = await this.prismaService.user.create({
        data: { ...data, password: hashedPassword },
      });

      return user;
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        throw new HttpException(
          'User with such credentials already exists',
          HttpStatus.BAD_REQUEST,
        );
      }

      throw err;
    }
  }

  async findByCredentials({
    email,
    username,
    password,
  }: UserSigninInput): Promise<User> {
    if (!email && !username) {
      throw new HttpException(
        'Either email or username must be provided',
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const user = await this.prismaService.user.findFirst({
        where: { OR: { email, username } },
      });

      if (!(await bcrypt.compare(password, user.password))) {
        throw new HttpException('Wrong credentials', HttpStatus.BAD_REQUEST);
      }

      return user;
    } catch (err) {
      throw new HttpException('Wrong credentials', HttpStatus.BAD_REQUEST);
    }
  }
}
