'use strict'
const undefined = void 0


function toCss(obj) {
  var keys = Object.keys(obj), css = ''
  for (var i = 0, k, v; k = keys[i], v = obj[k], i < keys.length; i++)
    css += `${kase(k, 'kebab')}: ${v};\n`
  return css
}


module.exports = {toCss}
