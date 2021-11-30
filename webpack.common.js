const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        assetModuleFilename: 'assets/[name].[hash][query][ext]',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
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
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
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
        new CopyWebpackPlugin({
            patterns: [
              { from: "public/assets", to: "assets" },
            ],
        }),
    ]
}