const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

module.exports = function override(config, env) {
  let overrideConfig = {};

  if (process.env.ELECTRON) {
    overrideConfig.target = 'electron-renderer';
    overrideConfig.plugins = [
      new webpack.DefinePlugin({ 
        'process.env': {
          'ELECTRON': 1
        }
      })
    ];
  };
  return webpackMerge(config, overrideConfig);
};
