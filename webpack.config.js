var path = require('path');
// eslint-disable-next-line no-undef
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
	// eslint-disable-next-line no-undef
	context: __dirname,
	devtool: debug ? 'inline-sourcemap' : 'sourcemap',
	entry: './src/js/main.js',
	output: {
		// eslint-disable-next-line no-undef
		path: __dirname + '/src/js',
		publicPath: '/js/',
		filename: 'bundle.js'
	},
	plugins: debug ? [
		new webpack.HotModuleReplacementPlugin()
	] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: [
							require('babel-plugin-check-es2015-constants'),
							require('babel-plugin-transform-es2015-arrow-functions'),
							require('babel-plugin-transform-es2015-classes')
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /main\.js/,
				exclude: /node_modules/,
				loaders: [
					'babel-loader',
					'webpack-module-hot-accept'
				]
			}
		]
	},
	devServer: {
		// eslint-disable-next-line no-undef
		contentBase: path.join(__dirname, 'src'),
		port: 9000,
		proxy: {
			'/configurations': 'http://localhost:8000'
		},
		compress: true,
		open: true,
		hot: true
	}
};
