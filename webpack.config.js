const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/search-carousel.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimizer: [
        new TerserPlugin()
        ],
    },
    output: {
        filename: 'discovery-showcase.js',
        path: path.resolve(__dirname, 'dist'),
    },
};