const path = require('path');
const util = require('util');

// ------------

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

// ------------

module.exports = {

    entry: {
        'css/index': './sass/index.scss',
        'css/custom/custom-1': './sass/custom/custom-1.scss',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].build.js'
    },

    devtool: 'source-map',

    plugins: [
        new MiniCssExtractPlugin(),
        new FixStyleOnlyEntriesPlugin()
    ],

    module: {

        rules: [

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                includePaths: [
                                    'sass',
                                    'assets'
                                ]
                            }
                        }
                    }
                    
                ]
            },

            {
                test: /\.(gif|png)(\?v=\d+\.\d+\.\d+)?$/, 
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[path][name].[ext]'
                        },
                    }
                ]
            },

        ]   
    }

}