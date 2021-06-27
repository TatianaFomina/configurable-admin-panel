const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
// const plugin = new webpack.DefinePlugin({
//   PRODUCTION: JSON.stringify(true),
//   VERSION: JSON.stringify('5fa3b9'),
//   BROWSER_SUPPORTS_HTML5: true,
//   TWO: '1+1',
//   'typeof window': JSON.stringify('object'),
//   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
// })

module.exports = {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue: '@vue/runtime-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', inject: 'body'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src/public')
  }
}
