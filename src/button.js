'use strict'
const undefined = void 0


function button({accent=false, stroke=false, fill=false, outline=false}={}) {
  fill = fill ? accent ? this.accent[0] : this.ink[2] : ''
  stroke = stroke ? accent ? this.ink[1] : this.ink[1] : ''
  stroke = stroke && `0 0 0 ${this.stroke[0]}rem ${stroke} inset`
  outline = outline ? this.accent[2] : ''
  stroke += outline ? `, 0 0 0 ${this.stroke[2]}em ${outline}` : ''
  var color = (fill ? this.canvas[0] : accent ? this.accent[0] : this.ink[0]).toString()

  var style = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0.4em 0.8em',
    borderRadius: '0.4em',
    fontWeight: this.text[2],
    transition: 'background-color 0.15s, color 0.15s, fill 0.15s, box-shadow 0.15s',
  }

  var diff = {
    backgroundColor: fill,
    color,
    boxShadow: stroke,
  }

  Object.assign(style, diff)
  

  return this.css ? this.css(style) : style
}


module.exports = button
