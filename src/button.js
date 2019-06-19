'use strict'
const undefined = void 0
const box = require('./box.js')


function button(boxOpts) {
  var style = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0.4em 0.8em',
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.15s, color 0.15s, fill 0.15s, box-shadow 0.15s',
  }

  var diff = box.call(this, boxOpts)
  Object.assign(style, diff)

  return this.css ? this.css(style) : style
}


module.exports = button
