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
import sendError from './util/error.ts';

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
