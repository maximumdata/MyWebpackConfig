module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  // watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.sass/,
        exclude: /node_modules/,
        loader: 'style!css!sass'
      }
    ]
  }
}
