import chalk from 'chalk';
import https from 'https';
import log from 'gulog';
import fs from 'fs';

import config from './config/default.js';
import { app } from './app.ts';

log.setup({
  prefix: '(BP AGENDA API)',
});

const PORT = process.env.PORT || 6060;
const server = app.listen(PORT, async () => {
  log.info(`🚀 Server iniciado em ${chalk.cyan(process.env.PORT || 6060)}.`);
});

let serverHttps: https.Server | undefined;

if (config.onHttpsServer) {
  serverHttps = https.createServer(
    {
      cert: fs.readFileSync('src/config/ssl/code.pem'),
      key: fs.readFileSync('src/config/ssl/key.pem'),
    },
    app
  ).listen(9090, () => {
    log.info(`🚀 Server https iniciado em ${chalk.cyan(9090)}.`);
  });
}

process.on('SIGINT', () => {
  server.close();
  if (serverHttps) serverHttps.close();
  log.error('App finalizado');
});
