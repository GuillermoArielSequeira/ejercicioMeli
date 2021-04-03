const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    home: './app/client/home.js',
    search: './app/client/search.js',
    productInfo: './app/client/productInfo.js'
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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|ttf|eot|otf|gif|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'url-loader' // para que pueda incluir nuevas fonts e imagenes
      },
      {
        test: /\.scss?$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
}