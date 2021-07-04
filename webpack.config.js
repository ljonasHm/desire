const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            // {
            //     test: /\.(png|jpg|svg|ttf|eot|woff|woff2|gif)$/,
            //     use: [
            //         'file-loader?name=[hash:12].[ext]&outputPath=images/',
            //         'image-webpack-loader',
            //     ],
            // }
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
    ]
};