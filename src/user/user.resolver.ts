import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Mutation,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { UserCreateInput } from 'src/@generated/graphql/user/user-create.input';
import { User } from 'src/@generated/graphql/user/user.model';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/decorators';

import { UserSession, UserSigninInput } from './models';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  async user(@CurrentUser() user: User) {
    console.log(user);
    return user;
  }

  @Mutation(() => User, { description: 'User Authentication' })
  async signinUser(@Args('data') data: UserSigninInput, @Context() context) {
    const user = await this.userService.findByCredentials(data);

    if (!user) {
      throw new HttpException(
        { error: 'Wrong credentials' },
        HttpStatus.BAD_REQUEST,
      );
    }

    context.session = await this.authService.createSession(user);

    return user;
  }

  @Mutation(() => User, { description: 'User Registration' })
  async signupUser(@Args('data') data: UserCreateInput) {
    return this.userService.create(data);
  }

  @ResolveField(() => UserSession)
  async session(@Context() context) {
    return context.session;
  }
}
