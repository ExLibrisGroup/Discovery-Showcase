/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

const commonPlugins = [
  replace({'Reflect.decorate': 'undefined'}),
  resolve(),
  terser({
    ecma: 2017,
    module: true,
    warnings: true,
    mangle: {
      properties: {
        regex: /^__/,
      },
    },
  }),
  summary(),
]

export default [
  {
    // Configuration for pnx-search-carousel.js
    input: 'pnx-search-carousel.js',
    output: {
      file: 'dist/pnx-discovery-showcase.bundled.js',
      format: 'esm',
    },
    onwarn(warning) {
      if (warning.code !== 'THIS_IS_UNDEFINED') {
        console.error(`(!) ${warning.message}`);
      }
    },
    plugins: commonPlugins,
  },
  {
    // Configuration for snx-search-carousel.js
    input: 'snx-search-carousel.js',
    output: {
      file: 'dist/snx-discovery-showcase.bundled.js',
      format: 'esm',
    },
    onwarn(warning) {
      if (warning.code !== 'THIS_IS_UNDEFINED') {
        console.error(`(!) ${warning.message}`);
      }
    },
    plugins: commonPlugins,
  },
];
