'use strict'
const undefined = void 0
const meter = require('./meter.js')


function toggle(props={}) {
  var style = meter.call(this, {x1: 0, x2: 0.45, fill:{shade:3, accent:0, weight:5}, 
    face:{shade:1, accent:1, weight:5}, pad: 2, round:3})
  var alt = meter.call(this, {x1: 0.55, x2: 1, fill:{shade:3, accent:0, weight:5}, 
    face:{shade:3, accent:1, weight:5}, pad: 2, round:3})

  var more = {
    width: `${this.weight[props.fill && props.fill.weight || 5] * 2}rem`,
    verticalAlign: 'bottom',
    appearance: 'button',
    outline: 'none',
    transition: 'all 1s',
    '&:checked': alt
  }

  Object.assign(style, more)
  return style
}


module.exports = toggle
