import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import log from 'gulog';

import sendError from '../util/error.ts';

interface DecodedUser {
    id: string;
}

const auth = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('authorization');
  if (!token) {
    return sendError(res, 'no_token');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT as Secret) as DecodedUser;
    req.body.authorization = decoded.id;
    next();
  } catch (err) {
    log.error(`Autenticação não autorizada:`);
    return sendError(res, 'internal_error');
  }
};

export default auth;
