const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const frontend = {
    entry: './src/js/front.js',

    output: {
        path: __dirname + '/public',
        filename: 'front-output.js'
    },

    devtool: 'eval-source-map',

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2017', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: './public/index.css',
            allChunks: true
        })
    ]
};

const backend = {
    entry: './src/js-backend/back.js',

    output: {
        path: __dirname,
        filename: 'back-output.js',
        libraryTarget: 'commonjs'
    },

    target: 'node',

    externals: [
        /^(?!\.|\/).+/i
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2017', 'react']
                }
            },
            {
                test: /\.node$/,
                exclude: /node_modules/,
                loader: 'node-loader'
            }
        ]
    },

    plugins: [

    ]
};

module.exports = [frontend, backend];
