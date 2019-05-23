'use strict'
const undefined = void 0
const Color = require('color')


function Theme() {
  this.accentA = Color('rgba(103, 61, 171, 1)')
  this.accentB = this.accentA.alpha(0.67)
  this.inkA = Color('#444')
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


module.exports = {Theme}
