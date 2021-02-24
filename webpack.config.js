const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    home: './app/client/index.js'
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: { // como se muestra en la terminal, con colores
    colors: true
  },
  plugins: [
    new MiniCssExtractPlugin({ // esto hace lo mismo que se hace arriba pero permite chunkear los css, los scss los compila a css
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  mode: 'development',
  // uso estas dos propiedad para excluir node_modules de la compilacion
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss?$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
}