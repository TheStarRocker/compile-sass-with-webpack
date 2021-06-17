const MINICSSEXTRACTPLUGIN = require('mini-css-extract-plugin'),
  PATH = require('path'),
  POSTCSSPRESETENV = require('postcss-preset-env');

function fOutput(sFilename = 'js/[name].min.js') {
  return {
    path: PATH.resolve(__dirname, '../dist'),
    filename: sFilename,
  };
}

function fMiniCssExtractPlugin(sFilename = 'css/[name].min.css') {
  return new MINICSSEXTRACTPLUGIN({
    filename: sFilename,
  });
}

function fCssLoaders(sSassOptionsMode = 'production') {
  /*
   * oSassOptions = dart-sass options
   * For additional information:
   *   https://github.com/sass/dart-sass#javascript-api
   */
  let oSassOptions = {};
  switch (sSassOptionsMode) {
    case 'development': {
      oSassOptions = {
        indentType: 'space',
        indentWidth: 2,
        outputStyle: 'expanded',
        sourceComments: true,
      };
      break;
    }
    case 'production': {
      oSassOptions = {
        outputStyle: 'compressed',
      };
      break;
    }
  }

  return {
    test: /\.(sa|sc|c)ss$/,
    use: [
      MINICSSEXTRACTPLUGIN.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              POSTCSSPRESETENV({
                autoprefixer: {
                  /*
                   * grid: (false|"autoplace"|"no-autoplace")
                   * Default: false
                   * For additional information:
                   *   https://github.com/postcss/autoprefixer#options
                   */
                  grid: 'autoplace',
                },
              }),
            ],
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: oSassOptions,
        },
      },
    ],
  };
}

module.exports = {
  fOutput,
  fMiniCssExtractPlugin,
  fCssLoaders,
};
