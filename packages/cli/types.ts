import CompressionPlugin from 'compression-webpack-plugin';
import { Configuration, ResolveOptions } from 'webpack';

/**
 * Inject expected ENV values into nodeJS process.env object.
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      IMA_CLI_WEBPACK_CONFIG_ARGS: string;
    }
  }
}

/**
 * Cli verbose parametr possible options.
 */
export enum VerboseOptions {
  DEFAULT = 'default',
  RAW = 'raw'
}

/**
 * ESVersions that can be chosen to generate a client bundle into.
 */
export enum ESVersions {
  'es5' = 'es5',
  'ES2015' = 'es6',
  'es6' = 'es6',
  'ES2016' = 'es7',
  'es7' = 'es7',
  'ES2017' = 'es8',
  'es8' = 'es8',
  'ES2018' = 'es9',
  'es9' = 'es9',
  'ES2019' = 'es10',
  'es10' = 'es10',
  'ES2020' = 'es11',
  'es11' = 'es11',
  'ES2021' = 'es12',
  'es12' = 'es12'
}

/**
 * Base args available in every ima script. Following 3 arguments
 * are available and mandatory in every ima cli script.
 */
export type BaseArgs = {
  rootDir: string;
  isProduction: boolean;
  command: 'start' | 'build' | 'dev';
};

/**
 * Start (ima start) script args
 */
export type StartArgs = BaseArgs;

/**
 * Shared dev and build script args
 */
export type DevBuildArgs = BaseArgs & {
  verbose?: VerboseOptions;
  scrambleCss?: boolean;
  publicPath?: string;
  amp?: boolean;
};

/**
 * Dev (ima dev) script args
 */
export type DevArgs = DevBuildArgs & {
  open?: boolean;
  esVersion?: ESVersions;
};

/**
 * Build (ima build) script args
 */
export type BuildArgs = DevBuildArgs & {
  clean?: boolean;
};

/**
 * Arguments passed across ima cli and into webpack config
 * function generator.
 */
export type Args = BuildArgs &
  DevArgs & {
    isWatch?: boolean;
  };

/**
 * CLI arguments merged with current configuration arguments.
 */
export type ConfigurationContext = Args & {
  name: string;
  isServer: boolean;
  ecma?: {
    isMain: boolean;
    version: ESVersions;
    suffix?: string;
  };
};

export type HandlerFn<T extends BaseArgs> = (args: T) => Promise<void>;
export type ConfigurationTypes = ('client' | 'server')[];

/**
 * Ima config options. Some of these options can be overridden using Args, which takes precedence.
 * These are parsed from optional ima.config.js that can be defined in the root of the IMA.js project.
 */
export type ImaConfig = {
  /**
   * Webpack callback function can be used to completely customize default webpack config before it's run:
   * @param {Configuration} config generated config by ima CLI, which can be further customized.
   * @param {ConfigurationContext} ctx CLI arguments merged with current configuration arguments.
   * @param {ImaConfig} imaConfig additional local ima.config.js file contents ({} if there's no file created).
   */
  webpack?: (
    config: Configuration,
    ctx: ConfigurationContext,
    imaConfig: ImaConfig
  ) => Configuration;

  /**
   * Webpack assets public path [default='']
   */
  publicPath: string;

  /**
   * Define array of ES versions to build client.js into.
   */
  esVersions: ESVersions[];

  /**
   * Array of compression algorithms used for assets in production build. [default=['brotliCompress', 'gzip']]
   */
  compression: Extract<
    CompressionPlugin.ZlibAlgorithm,
    'gzip' | 'brotliCompress'
  >[];

  /**
   * Enables CSS scrambling (for AMP too) [default=process.env.NODE_ENV==='production']
   */
  scrambleCss: boolean;

  /**
   * Threshold to inline image resources as base64 automatically [default=8192]
   */
  imageInlineSizeLimit: number;

  /**
   * Optional custom webpack aliases
   */
  webpackAliases?: ResolveOptions['alias'];

  /**
   * Settings related to AMP-specific css files generation
   */
  amp?: {
    /**
     * Enables AMP css assets generation
     */
    enabled?: number;

    /**
     * AMP styles entry points (array of globs)
     */
    entry?: string[];

    /**
     * Array of custom postcss plugins applied only to AMP entry points
     */
    postCssPlugins?: [];
  };
};

export type AdditionalDataFn = (content: string) => string;
export type AdditionalDataFactoryFn = (content: string) => void;
export type AdditionalDataContentFn = (
  prefix: AdditionalDataFactoryFn,
  postfix: AdditionalDataFactoryFn
) => void;

/**
 * IMA.js loaded environment
 */
export type ImaEnvironment = {
  /**
   * Server config
   */
  $Server: {
    port: number;
  };

  /**
   * Debug flag
   */
  $Debug: boolean;

  /**
   * Possible environments
   */
  $Env: 'production' | 'dev' | 'test' | 'regression';

  /**
   * App data
   */
  $App: unknown;

  /**
   * Array of defined languages
   */
  $Language: string[];
};
