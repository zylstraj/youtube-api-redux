var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app') + '/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      include: path.resolve(__dirname, 'app'),
      loader: ['babel-loader'],
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.css$/,
      include: path.resolve(__dirname, 'app'),
      loaders:[
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'
          ],
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
    ]
  },
  devServer: {
    stats: 'errors-only'
  }


};
