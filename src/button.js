'use strict'
const undefined = void 0


function button({accent=false, stroke=false, fill=false, outline=false}={}) {
  fill = fill ? accent ? this.accent[0] : this.ink[2] : 'none'
  stroke = stroke ? accent ? this.accent[1] : this.ink[2] : ''
  stroke = `0 0 0 ${this.stroke[0]}em ${stroke} inset`
  outline = outline ? this.accent[2] : ''
  stroke += outline ? `, 0 0 0 ${this.stroke[2]}em ${outline}` : ''

  return {
    position: 'relative',
    backgroundColor: fill,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0.4em 0.8em',
    borderRadius: '0.4em',
    color: accent ? this.canvas[0] : this.accent[0],
    fontWeight: this.text[2],
    boxShadow: stroke,
    transition: 'background-color 0.15s, color 0.15s, fill 0.15s, box-shadow 0.15s',
  }
}


module.exports = button
