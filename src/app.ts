import dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import chalk from 'chalk';
import log from 'gulog';
import cors from 'cors';

import connectDB from './database/connect.ts';
import { router } from './routes/index.ts';
import config from './config/default.ts';
import Errors from './util/error.ts';

const { sendError } = new Errors();
export const app: Application = express();
connectDB();

if (config.logRequestInformations) app.use(morgan('dev'));

app.use(helmet());
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: '*'
}));

app.use(express.json());

app.use('/v1', router);

app.use((err: any, req: Request, res: Response) => {
  log.error(`An error occurred at route: general route`);
  console.log(err);
  return sendError(res, 'internal_error', {
    logger: false
  });
});