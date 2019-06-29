'use strict'
const undefined = void 0
const meter = require('./meter.js')


function toggle(props) {
  var style = meter.call(this, {x1: 0, x2: 0.45, fill:{shade:3, accent:1, weight:5}, 
    face:{shade:1, accent:1, weight:5}, pad: 2, roundness:3})

  style.width = '2.5rem'
  // style.height = '1.25rem'
  return style
}


module.exports = toggle
