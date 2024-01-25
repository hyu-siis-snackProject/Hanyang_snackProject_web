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
      images: path.resolve(__dirname, 'public/images'),
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
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 지정한 크기보다 작은 이미지는 base64로 인라인화됨
              fallback: 'file-loader', // 지정한 크기 이상인 이미지는 file-loader로 처리
              outputPath: 'images', // 이미지를 저장할 경로 설정
            },
          },
        ],
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
