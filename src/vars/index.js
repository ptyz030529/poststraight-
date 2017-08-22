const colors = require('./core/colors')
const fonts = require('./core/fonts')
const selectors = require('./core/selectors')

const button = require('./components/button')
const form = require('./components/form')

const core = Object.assign(
  {},
  colors,
  fonts
)
const components = Object.assign(
  {},
  button,
  form
)
module.exports = {
  customProperties: {
    variables: Object.assign(
      {},
      core,
      components
    )
  },
  customSelectors: {
    extensions: selectors
  }
}