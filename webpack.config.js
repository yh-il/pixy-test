// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
    mode: 'development',
    // エントリーポイントの設定
    entry: {
        app: path.join(__dirname, "src/js/app.js"),
        // app: './src/js/app.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 1972,
        inline: false,
    },
    plugins: [
        // distをキレイに
        // new CleanWebpackPlugin(['dist']),
        // HMRの設定
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
        path: path.join(__dirname, 'dist'),
        // 出力するファイル名
        filename: 'bundle.js'
    },
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


