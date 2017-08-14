const express = require('express')
const webpack = require('webpack')

const webpackConfig = require('./webpack.conf')
const app = express()
const compiler = webpack(webpackConfig)

const port = 8080

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

app.use(devMiddleware)
app.listen(port)