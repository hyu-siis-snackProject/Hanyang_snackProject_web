const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {

    // pnd에 배포를 위해 rpt 디렉토리에 빌드
    path: path.join(__dirname, './build'),
    filename: 'hanyang_snack_web-[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins:
  [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, './build'),
    port: 8989,
    hot: true,
    open: true,
  },
};
