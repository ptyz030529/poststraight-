const express = require('express')
const webpack = require('webpack')

process.env.NODE_ENV = 'development'
const webpackConfig = require('./webpack.config')
const app = express()
const compiler = webpack(webpackConfig)

const port = 6060

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

app.use(devMiddleware)
app.use(hotMiddleware)
app.listen(port)