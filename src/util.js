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


module.exports = {toCss, dataUrl}
