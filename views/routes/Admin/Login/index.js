module.exports = {
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./container'));
    })
  },
}
