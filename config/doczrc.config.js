import merge from 'webpack-merge';

import commonConfig from './webpack.common';
import createStyleRule from './style-rule';

export default {
  menu: ['Getting Started'],

  typescript: true,

  modifyBundlerConfig: config =>
    merge(config, {
      resolve: {
        alias: commonConfig.resolve.alias,
      },
      module: {
        rules: [createStyleRule('dev')],
      },
    }),
};
