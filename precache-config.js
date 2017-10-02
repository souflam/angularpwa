var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {

  plugins: [
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'appsouflam',
        filename: 'service-worker.js',
        staticFileGlobs: [
          'dist/index.js',
          'dist/**.js',
          'dist/**.css',
        ],
        scriptPrefix: 'dist/assets/',
        mergeStaticsConfig: true
      }
    ),
  ],
}
