const path = require('path');

module.exports = {
  entry: [path.join(__dirname, 'src/index.js')],
  output: {
    filename: path.join(__dirname, 'dist/structure.js'),
    library: 'Structure',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    joi: 'joi',
    lodash: {
      root: '_',
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash'
    }
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};
