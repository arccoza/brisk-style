'use strict'
const undefined = void 0
const Color = require('color')


function Theme({css=null}={}) {
  var accent = Color('rgba(103, 61, 171, 1)')
  var canvas = Color('#FFF'), ink = Color('#999')

  this.css = css
  
  this.accent = [accent, accent.alpha(0.67), accent.alpha(0.4)]
  this.ink = [ink, ink.lighten(0.2), ink.lighten(0.4)]
  this.canvas = [canvas, canvas.darken(0.2), canvas.darken(0.4)]
  this.text = [100, 400, 600]
  this.stroke = [0.0625, 0.125, 0.25]
  this.roundness = [0.5, 1, 100000]
  this.elevation = [2, 4, 12]  // For box-shadow
  
  this.accentA = Color('rgba(103, 61, 171, 1)')
  this.accentB = this.accentA.alpha(0.67)
  this.inkA = Color('#666')
  this.inkB = this.inkA.lighten(0.2)
  this.canvasA = Color('#FFF')
  this.canvasB = this.canvasA.darken(0.2)
  this.textT = 100
  this.textR = 400
  this.textH = 600
  this.strokeS = 0.0625
  this.strokeM = 0.125
  this.strokeL = 0.25
}


module.exports = Theme
