import webpack      from 'webpack';
import path         from 'path';
import autoprefixer from 'autoprefixer';
import precss       from 'precss';

const assetsDir       = path.resolve(__dirname, 'public/assets');
const nodeModulesDir  = path.resolve(__dirname, 'node_modules');

const config = {
  devtool: "cheap-module-source-map",
  entry: [
    path.resolve(__dirname, 'src/app/index.js')
  ],
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'bundle.js',
    publichPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [nodeModulesDir],
      loader: 'babel'
    },  {
      test: /\.css$/,
      loader: 'style!css!postcss'
    }, {
      test: /\.scss$/,
      loader: 'style!css!postcss!sass'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
      loader: 'url?limit=100000&name=[name].[ext]'
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
  ]},
  plugins: [
    getImplicitGlobals(),
    setNodeEnv(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  postcss: function () {
    return [precss, autoprefixer];
  }
};
/*
* here using hoisting so don't use `var NAME = function()...`
*/
function getImplicitGlobals() {
  return new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  });
}

function setNodeEnv() {
  return new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  });
}

export default config;
