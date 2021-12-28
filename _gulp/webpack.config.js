const path = require('path');
const env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : '';
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const mode = {
  dev: require('./webpack.dev.js'),
  prod: require('./webpack.prod.js')
};

// 開発(true) or 本番(false)
const DEBUG = (!env || (env && env === 'development')) ? true : false;

const config = {
  // エントリーポイント
  entry: '../_assets/js/main.js',
  // babel
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        //node_moduluesの中身にあるjsファイルはbabelを通さない
        exclude: /node_modules/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: { ie: '11' },
                    
                    useBuiltIns: 'entry',
                    corejs: 3
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  // ファイルの出力設定
  output: {
    // 出力ファイル名
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, 'node_modules')
    }
  }
}


module.exports = DEBUG ? merge(config, mode.dev) : merge(config,mode.prod);