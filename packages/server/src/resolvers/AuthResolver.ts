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
import LoginData from '../inputs/LoginData';
import { COOKIE_NAME } from '../constants';

@Resolver()
class AuthResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext): Promise<User | undefined> {
    if (!req.session.userId) {
      return undefined;
    }

    return User.findOne(req.session.userId);
  }

  @Mutation(() => UserResponse)
  async login(@Arg('data') data: LoginData, @Ctx() { req }: MyContext): Promise<UserResponse> {
    const user = await User.findOne({ where: { email: data.email } });

    if (!user) {
      return {
        errors: [{
          field: 'login',
          message: 'Incorrect email password combination',
        }],
      };
    }

    const isValid = await argon2.verify(user.password, data.password);

    if (!isValid) {
      return {
        errors: [{
          field: 'login',
          message: 'Incorrect email password combination',
        }],
      };
    }

    req.session.userId = user.id;

    return { user };
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

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext): Promise<boolean> {
    return new Promise((resolve) => req.session.destroy((err) => {
      res.clearCookie(COOKIE_NAME);
      if (err) {
        resolve(false);
        return;
      }

      resolve(true);
    }));
  }
}

export default AuthResolver;
