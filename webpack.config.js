var path = require('path');
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
	context: __dirname,
	devtool: debug ? 'inline-sourcemap' : null,
	entry: './src/js/main.js',
	output: {
		path: __dirname + '/src/js',
		publicPath: '/js/',
		filename: 'bundle.js'
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: [
							require('babel-plugin-check-es2015-constants'),
							require('babel-plugin-transform-es2015-arrow-functions'),
							require('babel-plugin-transform-es2015-classes')
						]
					}
				}
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		port: 9000,
		proxy: {
			'/configurations': 'http://localhost:8000'
		},
		compress: true,
		open: true,
		watchContentBase: true
	}
};
