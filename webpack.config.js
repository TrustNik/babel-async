var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: {
        'test': path.join(__dirname, './src/index.js')
    },
    output: {
        path: path.join(__dirname, './build/'),
        filename: 'webpack-out.js'
    },
    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel']
            }
        ]
    }
};