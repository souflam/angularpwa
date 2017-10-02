var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/],
  stripPrefix: 'dist',
  root: 'dist/',
  plugins: [
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'appsouflam',
        filename: 'service-worker.js',
        staticFileGlobs: [
          'dist/index.html',
          'dist/**.js',
          'dist/**.css',
        ],
        scriptPrefix: 'dist/assets/',
        mergeStaticsConfig: true
      }
    ),
  ],
}
