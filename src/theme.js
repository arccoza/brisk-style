'use strict'
const undefined = void 0
const Color = require('color')


function Theme({css=null}={}) {
  var accent = Color('rgba(103, 61, 171, 1)')
  var canvas = Color('#FFF'), ink = Color('#777')

  this.css = css
  
  this.rem = 16
  this.font = ['', 'Roboto', 'Cuprum', 'RobotoMono']
  this.fontWeight = [0, 100, 400, 600]
  this.accent = [null, accent, accent.alpha(0.67), accent.alpha(0.4)]
  this.ink = [null, ink, ink.lighten(0.45), ink.lighten(0.95)]
  this.canvas = [null, canvas, canvas.darken(0.2), canvas.darken(0.4)]
  this.strokeWeight = [0, 0.0625, 0.125, 0.25]
  this.roundness = [0, 0.25, 0.5, 100000]
  this.elevation = [0, 0.125, 0.25, 0.5]  // For box-shadow
  
}

Theme.prototype.shade = function shade({shade, accent}) {
  return accent ? this.accent[Math.abs(shade)] : shade < 0 ? this.canvas[shade * -1] : this.ink[shade]
}


module.exports = Theme
