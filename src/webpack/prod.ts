import { cssLoaders, miniCssExtractPlugin, output } from './config';

module.exports = {
  mode: 'production',
  entry: {
    main: './src/dist/index.js',
  },
  output: output('js/[name].min.js'),
  plugins: [miniCssExtractPlugin('css/[name].min.css')],
  module: {
    rules: [cssLoaders('production')],
  },
};
