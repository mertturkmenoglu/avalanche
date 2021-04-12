import { Request, Response } from 'express';
import session from 'express-session';
import { Redis } from 'ioredis';

type MyContext = {
  req: Request & { session: session.Session & { userId: number } };
  redis: Redis;
  res: Response;
};

export default MyContext;
