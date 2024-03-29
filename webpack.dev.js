const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    { loader: 'css-loader', options: { modules: true } },
                    'sass-loader',
                ]
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({ title: 'sample react typescript', template: 'src/index.html' })]
})