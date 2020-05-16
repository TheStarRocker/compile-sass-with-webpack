import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Autoprefixer from 'autoprefixer';

/* 
  filename_
  Type: string
  Default: 'js/[name].min.js'
  Enter the desired ( path/name ) for the output file(s) { .js }.

  Notes:
  This function gives a dynamic name to the resulting {.js } files that will be stored in the { js/ } folder located inside { dist/ }; corresponding to the { output } property of { webpack }.

  The folder { js/ } located in { dist/ } will be deleted by the package { rimraf }, since the purpose of this environment is to provide the facility to compile { Sass } and thanks to { Autoprefixer } to add prefixes to the rules { css } with { Can I Use }.
*/
export function output(filename_: string = 'js/[name].min.js'): object {
  return {
    path: resolve(__dirname, '../../../dist'),
    filename: filename_,
  };
}

/* 
  filename_
  Type: string
  Default: 'css/[name].min.css'
  Enter the desired ( path/name ) for the output file(s) { .css }.
*/
export function miniCssExtractPlugin(
  filename_: string = 'css/[name].min.css'
): MiniCssExtractPlugin {
  return new MiniCssExtractPlugin({
    filename: filename_,
  });
}

/* 
  sassOptionsMode_
  Type: string
  Default: 'production'
  Set the mode you want the function to run, { development/production }, so that you can choose the most optimal configuration when compiling.
*/
export function cssLoaders(sassOptionsMode_: string = 'production'): object {
  const sassOptionsDev = {
    indentType: 'space',
    indentWidth: 2,
    outputStyle: 'expanded',
    sourceComments: true,
  };

  const sassOptionsProd = {
    outputStyle: 'compressed',
  };

  return {
    test: /\.(sa|sc|c)ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            /*
             * grid: (false|"autoplace"|"no-autoplace")
             * Default: false
             * For additional information: https://github.com/postcss/autoprefixer#options
             */
            Autoprefixer({ grid: 'autoplace' }),
          ],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          /*
           * sassOptions = node-sass options
           * For additional information: https://github.com/sass/node-sass#options
           */
          sassOptions:
            sassOptionsMode_ === 'development'
              ? sassOptionsDev
              : sassOptionsProd,
        },
      },
    ],
  };
}
