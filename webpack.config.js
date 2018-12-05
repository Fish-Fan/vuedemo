

module.exports = {
	entry: './js/entry.js',
	output: {
		path: _dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.css$/,loader: 'style-loader!css-loader'}
		]
	}
}
