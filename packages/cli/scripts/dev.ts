import { CommandBuilder } from 'yargs';

import { DevArgs, ESVersions, HandlerFn } from '../types';
import { handlerFactory, info } from '../lib/cli';
import { watchCompiler, handleError } from '../lib/compiler';
import { createWebpackConfig } from '../webpack/utils';
import SharedArgs from '../lib/SharedArgs';

const dev: HandlerFn<DevArgs> = async args => {
  try {
    info('Parsing webpack configuration file...');
    const config = await createWebpackConfig(['client', 'server'], {
      ...args,
      isProduction: false,
      isWatch: true
    });

    info('Starting webpack compiler...');
    await watchCompiler(config, args);
  } catch (err) {
    handleError(err);
  }
};

export const command = 'dev';
export const describe = 'Run application in development watch mode';
export const handler = handlerFactory(dev);
export const builder: CommandBuilder = {
  ...SharedArgs,
  open: {
    alias: 'o',
    desc: 'Opens browser window after server has been started',
    type: 'boolean',
    default: true
  },
  esVersion: {
    alias: 'e',
    desc: 'Override default es version used in watch mode',
    type: 'string',
    choices: Object.keys(ESVersions)
  }
};
