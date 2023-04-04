import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.push(
      nodeResolve(),
      commonJS({
        include: 'node_modules/**',
      })
    );
    return config; // always return a config.
  },
};
