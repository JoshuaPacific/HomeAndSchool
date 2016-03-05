var path = require('path')

// webpack.config.js
module.exports = {
  // entry point of our application
  entry:{
	app:'./src/app.js'
  },
  // where to place the compiled bundle
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  externals:{
	'zepto':'Zepto'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.less','.css'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [
        {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
        },
	    {
        // use babel-loader for *.js files
        test: /\.js$/,
        loader: 'babel',
		exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//
        // important: exclude files in node_modules
        // otherwise it's going to be really slow!
        },
        {
        test: /\.less$/,
        loader: 'css!less'
        },
        {
        test: /\.css$/,
        loader: "style!css"
        },
        {
        test: /\.scss$/,
        loader: 'style!css!sass'
        },
		{
        test: /\.json$/,
        loader: 'json'
        },
        {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  
  vue: {
    // configure autoprefixer
    autoprefixer: {
      browsers: ['last 2 versions']
    },
	loaders: {
      less: 'vue-style!css!less'
    }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
