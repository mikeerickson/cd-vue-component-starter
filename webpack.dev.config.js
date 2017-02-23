/* global require, module */

const webpackConfig = require('./webpack.core.config');
const path          = require('path');

webpackConfig.entry = './index.js';
webpackConfig.output = {
	path: path.resolve('build') + '/',
	publicPath: 'build',
	filename: 'build.js'
};

module.exports = webpackConfig;
