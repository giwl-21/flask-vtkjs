const webpack = require('webpack');
const resolve = require('path').resolve;
const path = require('path');
const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;

const sourcePath = path.join(__dirname, './js');  

const config = {
    devtool: 'eval-source-map',
    entry: __dirname + '/js/index.jsx',
    output:{
        path: resolve('../public'),
        filename: 'bundle.js',
        publicPath: resolve('../public')
    },
    resolve: {
      extensions: ['.js','.jsx','.css'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        sourcePath,
      ],
    },
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
      { 
        test: /\.html$/, 
        loader: 'html-loader' 
      },
      { test: /\.svg$/, 
        use: [{ 
          loader: 'raw-loader' 
        }] 
      },
      ].concat(vtkRules),
   }
};
module.exports = config;