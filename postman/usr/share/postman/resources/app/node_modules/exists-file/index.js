'use strict'

var fs = require('fs')
var path = require('path')

var getAbsolutePath = function (filepath) {
  return path.resolve(process.cwd(), filepath)
}

var methods = {
  async: function (filepath, cb) {
    return fs.stat(getAbsolutePath(filepath), function (err, stats) {
      if (err == null) return cb(null, true)
      if (err.code === 'ENOENT') return cb(null, false)
      return cb(err, stats)
    })
  },

  sync: function (filepath) {
    try {
      fs.statSync(getAbsolutePath(filepath))
      return true
    } catch (err) {
      if (err.code === 'ENOENT') return false
      throw err
    }
  }
}

module.exports = function (filepath, cb) {
  var method = cb ? 'async' : 'sync'
  if (typeof filepath !== 'string') {
    if (cb) return cb(null, false)
    return false
  }
  return methods[method].apply(this, arguments)
}
