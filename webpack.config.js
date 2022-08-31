const defaultConfig = require('@wordpress/scripts/config/webpack.config')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  ...defaultConfig,
  //   entry: './src/index.js',
  module: {
    ...defaultConfig.module,
    rules: [...defaultConfig.module.rules],
  },
  resolve: {
    extensions: ['.tsx', '.ts', 'js', 'jsx'],
    ...defaultConfig.resolve,
  },
  plugins: [
    ...defaultConfig.plugins,
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      proxy: 'http://goblocks.test/',
    }),
  ],
}
