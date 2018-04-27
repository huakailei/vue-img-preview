var path = require('path');
module.exports = {
  entry: './src/lib/index.js',
  output: {
  	path:path.join(__dirname,'./dist'),
    filename: 'vue-img-preview.js',
    libraryTarget:'umd',
    library:'VueImgPreview'
  },
  module:{
  	rules:[
  		{
  			test:/\.vue$/,
  			loader:'vue-loader',
  			exclude:/node_modules/,
  			options:{
  				loaders:{
  					scss:'style-loader!css-loader!sass-loader'
  				}
  			}
  		},
  		{
  			test:/\.js$/,
  			loader:'babel-loader',
  			include:path.join(__dirname,'src'),
  			exclude:/node_modules/
  		},
        { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'}
  	]
  },
  plugins:[


  ]
}