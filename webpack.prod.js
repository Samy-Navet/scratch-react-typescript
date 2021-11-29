const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
            new HtmlWebpackPlugin({ 
                title: 'sample react typescript', 
                template: 'src/index.html', 
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
              } 
            })
        ]
    },
    plugins: [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css'})],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    { loader: 'css-loader', options: { modules: true } },
                    'sass-loader',
                ]
            },
        ]
    },
})