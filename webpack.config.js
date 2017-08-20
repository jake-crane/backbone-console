var path = require('path');
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
	context: __dirname,
	devtool: debug ? 'inline-sourcemap' : null,
	entry: './src/js/main.js',
	output: {
		path: __dirname + "/src/js",
		publicPath: '/js/',
		filename: 'bundle.js'
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
		new webpack.HotModuleReplacementPlugin()
	],
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
