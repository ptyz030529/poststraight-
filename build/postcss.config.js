const features = require('../src/vars/index.js')
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-cssnext": {
      browsers: ['last 2 versions', 'IE > 10'],
      features: features
    }
  }
}