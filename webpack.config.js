var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('commons.js');
var path = require('path');

module.exports = {
	// 插件项
	plugins: [],

	//页面入口配置文件
	entry: {
		index: './js/main.js'
	},

	// 入口文件输出配置
	output: {
		path: path.resolve(__dirname, './bin'),
		filename: 'bin.js'
	},

	// 加载配置
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			// {test: /\.js$/, loader: 'jsx-loader!harmony'},
			{test: /\.scss$/, loader: 'style!css!sass!sourceMap'},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		]
	},

	// 其他解决方案配置
	resolve: {}
};