import type { OutputOptions } from 'rollup'

import glob from 'fast-glob'
import { rollup } from 'rollup'
import css from 'rollup-plugin-css-only'
import esBuild from 'rollup-plugin-esbuild'
import fileSize from 'rollup-plugin-filesize'
import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { VsilkAlias } from './plugins/vsilk-alias'
import { reporter } from './plugins/size-reporter'
import { epRoot, pkgRoot } from './utils/paths'
import { generateExternal, writeBundles } from './utils/rollup'
import { excludeFiles } from './utils/pkg'
import { buildConfigEntries } from './build-info'

export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  )
  const bundle = await rollup({
    input,
    plugins: [
      await VsilkAlias(),
      css(),
      vue({ target: 'browser' }),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esBuild({
        sourceMap: true,
        target: 'es2018',
      }),
      fileSize({ reporter }),
    ],
    external: await generateExternal({ full: false }),
    treeshake: false,
  })
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: epRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    })
  )
}
