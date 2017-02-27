/*global module */

module.exports = {
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.vue$/, loader: 'vue-loader'},
			{test: /\s[a|c]ss$/, loaders: ['style-loader','css-loader', 'sass-loader'], exclude: /(node_modules)/},
			{test: /\s[a|c]ss$/, loader: 'sasslint', exclude: /(node_modules)/},
      { test: /\.png$/,  use: { loader: 'url-loader', options: { limit: 100000 } }, }
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	}
};
