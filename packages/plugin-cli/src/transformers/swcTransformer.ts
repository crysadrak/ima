import { ModuleConfig, Options, ParserConfig, transform } from '@swc/core';

import { Transformer } from '../types';

const EXTENSION_TRANSFORM_RE = /\.(t|j)sx?$/;

export type SWCTransformerOptions = Options;

/**
 * Helper function to create basic swc transformer config.
 */
export function createSwcTransformer({
  type,
  syntax,
  development,
}: {
  type: ModuleConfig['type'];
  syntax?: ParserConfig['syntax'];
  development?: boolean; // TODO
}) {
  return swcTransformer({
    isModule: true,
    module: {
      type: type ?? 'es6',
    },
    jsc: {
      target: 'es2022',
      parser: {
        syntax: syntax ?? 'ecmascript',
        decorators: false,
        dynamicImport: true,
        [syntax === 'typescript' ? 'tsx' : 'jsx']: true,
      },
      transform: {
        react: {
          useBuiltins: true,
          development: !!development,
        },
      },
    },
  });
}

export function swcTransformer(options: SWCTransformerOptions): Transformer {
  return async ({ source }) => {
    const { code, map } = await transform(source.code, options);
    const newFilename = source.fileName.replace(EXTENSION_TRANSFORM_RE, '.js');

    return {
      fileName: newFilename,
      code: map ? code + `\n//# sourceMappingURL=${newFilename}.map` : code,
      map,
    };
  };
}
