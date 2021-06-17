const CONFIG = require('./config');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  output: CONFIG.fOutput('js/[name].min.js'),
  plugins: [CONFIG.fMiniCssExtractPlugin('css/[name].min.css')],
  module: {
    rules: [CONFIG.fCssLoaders('production')],
  },
};
