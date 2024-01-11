import { Router, Request, Response } from 'express';

export const router = Router();

router.get('/ping', (req: Request, res: Response) => {
  res.sendStatus(200);
});