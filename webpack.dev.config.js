import path            from 'path';
import coreConfig      from './webpack.core.config';
import merge           from 'webpack-merge';

import StyleLintPlugin from 'stylelint-webpack-plugin';

const webpackDevConfig = {
	entry: './index.js',
	output: {
		path: path.resolve('build') + '/',
		publicPath: 'build',
		filename: 'build.js'
	},
	plugins: [
		new StyleLintPlugin()
	]
};


export default merge(coreConfig, webpackDevConfig);