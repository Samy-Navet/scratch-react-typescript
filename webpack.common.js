const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        assetModuleFilename: 'assets/[name].[hash][query][ext]',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                type: 'asset/resource'
            }
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({ title: 'sample react typescript', template: 'src/index.html' }),
        new CopyWebpackPlugin({
            patterns: [
              { from: "public/assets", to: "assets" },
            ],
        }),
    ]
}