import { cssLoaders, miniCssExtractPlugin, output } from './config';

export = {
  mode: 'development',
  entry: {
    main: './src/dist/index.js',
  },
  output: output('js/[name].js'),
  plugins: [miniCssExtractPlugin('css/[name].css')],
  module: {
    rules: [cssLoaders('development')],
  },
};
