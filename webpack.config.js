var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './renderer.js'],
    },
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/built/'
    },
    devServer: {
        contentBase: '/',
        publicPath: 'http://localhost:8080/built/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    externals: [
    (function () {
      var IGNORES = [
        'electron'
      ];
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })()
    ]
}