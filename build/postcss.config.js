module.exports = ({ file, options, env }) => ({
  plugins: {
    "postcss-cssnext": {
      browsers: ['last 2 versions', 'IE > 10']
    }
  }
})