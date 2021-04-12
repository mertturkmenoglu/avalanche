/* eslint-disable no-console */
import path from 'path';

import 'reflect-metadata';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import cors from 'cors';
import session from 'express-session';
import Redis from 'ioredis';
import connectRedis from 'connect-redis';
import dotenv from 'dotenv-safe';

import { createConnection } from 'typeorm';
import AuthResolver from './resolvers/AuthResolver';
import { COOKIE_NAME, FRONTEND_DOMAIN, isProd } from './constants';
import User from './entities/User';

dotenv.config();

const main = async () => {
  const connection = await createConnection({
    type: 'postgres',
    url: process.env.DB_URL,
    logging: !isProd,
    synchronize: !isProd,
    migrations: [path.join(__dirname, 'migrations', '*')],
    entities: [User],
  });

  await connection.runMigrations();

  const app = express();
  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.set('trust proxy', 1);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AuthResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
    }),
  });

  app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }));

  app.use(session({
    name: COOKIE_NAME,
    secret: process.env.SESSION_SECRET as string,
    store: new RedisStore({
      client: redis,
      disableTouch: true,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 90, // 90 days
      httpOnly: true,
      sameSite: 'lax',
      secure: isProd,
      domain: isProd ? FRONTEND_DOMAIN : undefined,
    },
    saveUninitialized: false,
    resave: false,
  }));

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log('Server started on http://localhost:4000/graphql');
  });
};

main().catch((err) => {
  console.error(err);
});
