var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const PUBLIC_PATH = 'https://souflam.github.io/angularpwa/dist/';
module.exports = {
  navigateFallback: PUBLIC_PATH+'index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/],
  stripPrefix: 'dist',
  root: 'dist/',
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
