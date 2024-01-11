import mongoose from 'mongoose';
import chalk from 'chalk';
import log from 'gulog';

import config from '../config/default.ts';

const connectDB = async (): Promise<void> => {
  try {
    const { production } = config;

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const uri = production ? process.env.MONGOURI! : process.env.MONGOURI_TEST!;

    mongoose.set('strictQuery', true);
    await mongoose.connect(uri, options as any);

    log.info(`Database conectada: ${chalk.green('mongoDB')}-${chalk.yellow(production ? 'production' : 'desenvolvimento')}.`);
  } catch (err: any) {
    log.error('Erro ao conectar com o banco de dados.');
    console.error(err.message || err);

    process.exit(1);
  }
};

export default connectDB;
