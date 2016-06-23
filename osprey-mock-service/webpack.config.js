var path = require("path");

module.exports = {
	entry: {
		bundle: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, "build")
	},
	devServer: {
		hot: true,
		proxy: {
			'/service/*': {
				target: 'http://localhost:9999',
				rewrite: function(req) {
					req.url = req.url.replace('/service', '/api/v1')
				}
			}
		}
	}
};