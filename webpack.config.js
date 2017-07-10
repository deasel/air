const path = require('path');

module.exports = {
  entry: './app/src/index.js',
  output: {
    path: path.resolve(__dirname, './app/dist/'),
    filename: 'app.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
};
