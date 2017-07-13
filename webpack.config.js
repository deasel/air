var path = require('path')
//TODO: 插件运行报错，暂时不使用
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	cache: false,
	entry: './app/src/index.js',
	output: {
		path: path.resolve(__dirname, './app/dist/'),
		publicPath: '/air/app/dist/',
		filename: 'build.js',
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}, {
			test: /\.css$/,
			// use: ExtractTextPlugin.extract({
			// 	fallback: "style-loader",
			// 	use: "css-loader"
			// })
      // use: ExtractTextPlugin.extract(['style-loader', 'css-loader'])
      use: ['style-loader', 'css-loader']
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'url-loader?limit=8192&name=images/[name].[ext]'
			]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [
				'file-loader'
			]
		}]
	},
	plugins: [
		// new ExtractTextPlugin("styles.css")
	]
}
