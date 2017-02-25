import path            from 'path';
import coreConfig      from './webpack.core.config';
import merge           from 'webpack-merge';

const webpackDevConfig = {
	entry: './index.js',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve('build') + '/',
		publicPath: 'build',
		filename: 'build.js'
	}
};


export default merge(coreConfig, webpackDevConfig);
