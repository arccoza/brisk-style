'use strict'
const undefined = void 0
const {kase} = require('kase')


function toCss(obj) {
  var keys = Object.keys(obj), css = ''
  for (var i = 0, k, v; k = keys[i], v = obj[k], i < keys.length; i++)
    css += `${kase(k, 'kebab')}: ${v};\n`
  return css
}

function dataUrl(data, {type='svg', enc='base64'}={}) {
  return `url('data:image/svg+xml;${enc},${enc == 'base64' ? btoa(data) : data}')`
}

function assign(to, ...from) {
  for (var i=0, obj, keys; i < from.length; i++) {
    obj = from[i] || {}, keys = Object.keys(obj)
    for (var j=0, k, v; k=keys[j], v=obj[k], j < keys.length; j++)
      to[k] = v
  }
  return to
}


module.exports = {toCss, dataUrl, assign}
