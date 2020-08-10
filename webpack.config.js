// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeExternals = require('webpack-node-externals');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const WebpackCopyDocumentsPlugin = require('./webpack-copy-documents-pugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '#': path.resolve(__dirname, 'src'),
    },
    modules: ['node_modules'],
    extensions: ['.ts', '.js'],
  },
  plugins: [new WebpackCopyDocumentsPlugin()],
  externals: [nodeExternals()],
};
