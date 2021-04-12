import {
  Arg, Ctx, Mutation, Query, Resolver,
} from 'type-graphql';
import argon2 from 'argon2';
import { validateOrReject } from 'class-validator';
import { getConnection } from 'typeorm';
import RegisterData from '../inputs/RegisterData';
import MyContext from '../MyContext';
import UserResponse from '../responses/UserResponse';
import User from '../entities/User';
import { validationErrorToFieldError } from '../utils/validationErrorToFieldError';

@Resolver()
class AuthResolver {
  @Query(() => String)
  async auth(): Promise<string> {
    return 'auth';
  }

  @Mutation(() => UserResponse)
  async register(@Arg('data') data: RegisterData, @Ctx() { req }: MyContext): Promise<UserResponse> {
    try {
      await validateOrReject(data);
    } catch (e) {
      const errors = validationErrorToFieldError(e);
      return { errors };
    }

    const userExists = await getConnection().getRepository(User)
      .createQueryBuilder('user')
      .where('user.email = :email OR user.username = :username')
      .setParameters({ email: data.email, username: data.username })
      .getOne();

    if (userExists) {
      const errors = [];
      if (userExists.email === data.email) {
        errors.push({ field: 'email', message: 'already taken' });
      }

      if (userExists.username === data.username) {
        errors.push({ field: 'username', message: 'already taken' });
      }

      return { errors };
    }

    try {
      const hashed = await argon2.hash(data.password);
      const user = await User.create({
        email: data.email,
        username: data.username,
        name: data.name,
        password: hashed,
      }).save();

      req.session.userId = user.id;
      return { user };
    } catch (e) {
      return {
        errors: [
          {
            field: 'unknown',
            message: 'unknown',
          },
        ],
      };
    }
  }
}

export default AuthResolver;
