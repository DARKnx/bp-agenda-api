import { Router, Request, Response } from 'express';

import usersRouter from './resources/users.router.ts';
export const router = Router();

router.get('/ping', (req: Request, res: Response) => {
  res.sendStatus(200);
});

router.use('/user', usersRouter);