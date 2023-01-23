const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    'crypto': require.resolve('crypto-browserify'),
    'asset': require.resolve('assert'),
    'stream': require.resolve('stream-browserify'),
    'buffer': require.resolve('buffer'),
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  );

  config.module.rules.unshift({
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false, // disable the behavior
    },
  });

  return config;
};
