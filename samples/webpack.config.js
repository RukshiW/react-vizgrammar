const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                exclude: path.resolve(__dirname, './node_modules'),
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
            },

            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true,
        port: 8080,
    },
};