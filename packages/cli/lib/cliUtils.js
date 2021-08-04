const path = require('path');
const fs = require('fs');

const { error } = require('./print');
const webpackConfig = require('../webpack/config');

const IMA_CONF_FILENAME = 'ima.conf.js';

async function loadImaConf(rootDir) {
  if (!rootDir) {
    return {};
  }

  const imaConfPath = path.join(rootDir, IMA_CONF_FILENAME);

  return fs.existsSync(imaConfPath) ? require(imaConfPath) : {};
}

function handlerFactory(handlerFn) {
  return async yargs => {
    // eslint-disable-next-line no-unused-vars
    const [command, dir = ''] = yargs._ || [];
    const isProduction = process.env.NODE_ENV === 'production';
    const rootDir = dir
      ? path.isAbsolute(dir)
        ? dir
        : path.resolve(process.cwd(), dir)
      : process.cwd();

    return await handlerFn({
      ...yargs,
      rootDir,
      isProduction,
      command
    });
  };
}

async function createWebpackConfig(
  configurations = ['client', 'server'],
  configArgs = null
) {
  if (!configArgs) {
    // Load config args from env variable
    try {
      configArgs = JSON.parse(process.env.IMA_CLI_WEBPACK_CONFIG_ARGS);
    } catch (err) {
      error('Error occurred while parsing env webpack config.');
      error(err);
    }
  } else {
    // Cache config args to env variable
    process.env.IMA_CLI_WEBPACK_CONFIG_ARGS = JSON.stringify(configArgs);
  }

  if (!configArgs) {
    error(
      'Unable to load config args used to create initialize webpack config.'
    );

    return null;
  }

  // Load imaConf
  const imaConf = await loadImaConf(configArgs.rootDir);
  const finalConfigArgs = [];

  if (~configurations.indexOf('client')) {
    finalConfigArgs.push({
      ...configArgs,
      isServer: false
    });
  }

  if (~configurations.indexOf('server')) {
    finalConfigArgs.push({
      ...configArgs,
      isServer: true
    });
  }

  return Promise.all(
    finalConfigArgs.map(async args => {
      if (typeof imaConf?.webpack === 'function') {
        return await imaConf?.webpack(
          await webpackConfig(args, imaConf),
          args,
          imaConf
        );
      } else {
        return await webpackConfig(args, imaConf);
      }
    })
  );
}

module.exports = {
  createWebpackConfig,
  handlerFactory,
  loadImaConf
};
