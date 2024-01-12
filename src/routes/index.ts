import { Router, Request, Response } from 'express';

import historicRouter from './resources/historic.router.ts';
import eventsRouter from './resources/events.router.ts';
import usersRouter from './resources/users.router.ts';

export const router = Router();

router.get('/ping', (req: Request, res: Response) => {
  res.sendStatus(200);
});

router.use('/historic', historicRouter);
router.use('/event', eventsRouter);
router.use('/user', usersRouter);