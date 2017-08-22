const features = require('../src/vars/index.js')
console.log(features)
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-cssnext": {
      browsers: ['last 2 versions', 'IE > 10'],
      // features: {
      //   customProperties:{
      //     variables:{
      //       buttonPadding: '10px'
      //     }
      //   }
      // }
      features: features
    }
  }
}