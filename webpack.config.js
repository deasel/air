var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	cache: false,
	entry: './app/src/index.js',
	output: {
		path: path.resolve(__dirname, './app/dist/'),
		publicPath: '/air/app/dist/',
		filename: 'build.js',
	},
	devtool: '#source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}, {
			test: /\.css$/,
			include: /node_modules/,
			loader: ExtractTextPlugin.extract(
				'css-loader?sourceMap'
			)
		}, {
			test: /\.css$/,
			exclude: /node_modules/,
			loader: ExtractTextPlugin.extract(
				'css-loader?sourceMap&modules&localIdentName=[local]'
			),
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'url-loader?limit=8192&name=image/[name].[ext]'
			]
		}, 
		// {
		// 	test: /\.(woff|woff2|eot|ttf|otf)$/,
		// 	use: [
		// 		'file-loader?name=fonts/[name].[ext]'
		// 	]
		// }
		// the url-loader uses DataUrls.
      // the file-loader emits files.
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
        // loader: "url?limit=10000"
        use: "url-loader"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader'
      }
	]
	},
	plugins: [
    new ExtractTextPlugin('build.css', {
      disable: false,
      allChunks: true,
    })
	]
}
