// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
    mode: 'development',
    // エントリーポイントの設定
    entry: {
        app: './src/js/app.js'
    },
    // 出力の設定
    output: {
        // 出力するファイル名
        filename: '[name].bundle.js',
        // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
        path: path.join(__dirname, 'dist/js')
    },
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        contentBase: "./dist",
        compress: true,
        hot: true,
        port: 1972
    },
    plugins: [
        // distをキレイに
        // new CleanWebpackPlugin(['dist']),
        // HMRの設定
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    // ローダーの設定
    module: {
        rules: [
            {
                test: /\.js$/, // ローダーの処理対象ファイル
                exclude: /node_modules/, // ローダーの処理対象から外すディレクトリ
                use: [{ // 利用するローダー
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },{
                        loader: "css-loader" // translates CSS into CommonJS
                    },{
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ],
    }
};


