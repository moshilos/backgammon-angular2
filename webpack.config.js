/**
 * Created by Moshi.los on 10/2/2015.
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./src/client/index.js'],
        vendors: ['lodash']
    },
    output: {
        path: './public/js',
        filename: "app.js"
    },
    module: {
        noParse: [/^lodash$/],
        loaders: [
            { test: /\.json$/, loader: 'json-loader'},
            {
                // HTML LOADER
                // Reference: https://github.com/webpack/raw-loader
                // Allow loading html through js
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!!sass-loader'
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
],
    'html-minify-loader': {
        empty: true,        // KEEP empty attributes
        cdata: true,        // KEEP CDATA from scripts
        comments: true     // KEEP comments
    }
};