const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
	console.log('******************', env, argv);

	return {
		mode: argv.mode,
		entry: './src/index.js',
		output: {
			filename: 'js/main.js',
			path: path.resolve(__dirname, './dist/'),
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.svg$/,
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: './svg/',
						publicPath: '/svg/'
					}
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html'
			})
		],
		devServer: {
			historyApiFallback: true
		}
	};
};
