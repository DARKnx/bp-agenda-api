import chalk from 'chalk';
import log from 'gulog';
import fs from 'fs';

import config from '../config/default.ts';

interface ErrorResponse {
  code: number;
  msg: string;
}

export default class ErrorHandler {
  sendError(res: any, errorMessage: string, options: { logger?: boolean; replaceMessage?: string } = {}): void {
    try {
      const errorData: Record<string, { statusCode: number; message: string }> = JSON.parse(fs.readFileSync('./src/config/errors.json', 'utf-8'));
      errorMessage = errorMessage.toLowerCase();

      if (!errorData[errorMessage]) {
        throw new Error('Error message does not exist');
      }

      const error = errorData[errorMessage];
      error.message = error.message.replace('%%%', options.replaceMessage || '');

      const url = res.req.originalUrl || 'sem data';
      const logMessage = error.message + ' - ' + chalk.red(url);

      if ((errorMessage === 'internal_error' && config.logInternalErrors) || (config.logGeneralErrors && options.logger)) {
        log.error(logMessage);
      }

      res.status(error.statusCode).json({
        code: error.statusCode,
        msg: error.message,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        code: 500,
        msg: 'Internal Server Error',
      });
    }
  }
}
