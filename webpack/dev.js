const CONFIG = require('./config');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: CONFIG.fOutput('js/[name].js'),
  plugins: [CONFIG.fMiniCssExtractPlugin('css/[name].css')],
  module: {
    rules: [CONFIG.fCssLoaders('development')],
  },
};
