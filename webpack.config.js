const path = require('path');

module.exports = {
    entry    : './app/build/index.js',
    output   : {
        path    : path.join(__dirname, 'public_html/assets/js'),
        filename: 'main.js'
    },
    watch    : true,
    module   : {
        rules: [{
            loader : 'babel-loader',
            test   : /\.js$/,
            exclude: /node_modules/
        }, {
            test   : /\.less/,
            use    : [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }],
            exclude: /node_modules/
        }]
    },
    stats: {
        warnings: false
    }
};
