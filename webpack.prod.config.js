/*global module, require */

var webpack = require('webpack');
var config = require('./webpack.core.config');

config.entry = './src/index.js';
config.output = {
	filename: './dist/hello-world.min.js',
	library: 'HelloWorld',
	libraryTarget: 'umd'
};

config.plugins = (config.plugins || []).concat([
	new webpack.optimize.UglifyJsPlugin({
		sourceMap: false,
		compress: {
			warnings: false
		}
	})
]);
module.exports = config;
