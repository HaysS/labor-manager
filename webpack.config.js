const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require(__dirname+'/src/client/app/libs/parts');

const PATHS = {
	app: path.join(__dirname, 'src/client/app'),
	build: path.join(__dirname, 'src/client/build')
};

const TARGET = process.env.npm_lifecycle_event;

const common = {
	entry: PATHS.app+'/index.jsx',
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Dating App',
			template: PATHS.app+'/index-template.ejs'
		})
	],
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: PATHS.app,
				loader: 'babel'
			}
		]
	}
};

var config;

process.env.BABEL_ENV = TARGET;

switch(process.env.npm_lifecycle_event) {
	case 'build':
		config = merge(
			common,

			{
				devtool: 'source-map'
			},
			parts.setupCSS(PATHS.app)	
		);
		break;
	default:
		config = merge(
			common,

			{
				devtool: 'eval-source-map'
			}, 
			parts.setupCSS(PATHS.app),
			parts.devServer({
				host: process.env.HOST,
				port: process.env.PORT
			})
		);
}

module.exports = validate(config);