import webpack    from 'webpack';
import coreConfig from './webpack.core.config';
import merge      from 'webpack-merge';

const webpackProdConfig = {
	entry: './src/js/index.js',
	output: {
		filename: './dist/hello-world.min.js',
		library: 'HelloWorld',
		libraryTarget: 'umd'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: {
				warnings: false
			}
		})
	]
};

export default merge(coreConfig, webpackProdConfig);
