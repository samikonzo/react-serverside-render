const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
	entry: './src/server.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js',
		publicPath: '/'
	},
	target: 'node',
	externals: nodeExternals(),
	plugins: [
		new webpack.DefinePlugin({
			'process.env' : {
				NODE_ENV: `'production'`
			}
		})
	],
	module:{
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},

			{
				test: /\.jsx$/,
				loader: 'babel-loader'
			},

			{
				test:/\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader',
				]
			}


		]
	}
}