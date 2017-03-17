import webpack from 'webpack';
import BabiliPlugin from 'babili-webpack-plugin';

export default {
  entry: './components/Hai.vue',
  output: {
    path: `${__dirname}/dist/`,
    filename: 'Hai.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new BabiliPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
