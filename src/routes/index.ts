import { Router, Request, Response } from 'express';

import eventsRouter from './resources/events.router.ts';
import usersRouter from './resources/users.router.ts';

export const router = Router();

router.get('/ping', (req: Request, res: Response) => {
  res.sendStatus(200);
});

router.use('/event', eventsRouter);
router.use('/user', usersRouter);