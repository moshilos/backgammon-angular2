/**
 * Created by Moshi.los on 10/2/2015.
 */
var config = require( './webpack.config.js');
config.entry.app.push('webpack/hot/dev-server');
config.output.publicPath = '/js/';

module.exports = config;