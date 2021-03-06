'use strict'
const undefined = void 0
const Color = require('color')


function Theme({css=null}={}) {
  var accent = Color('rgba(103, 61, 171, 1)') //#ffca57, #17BEBB, #EF3E36
  var canvas = Color('#FFF'), ink = Color('#777') //#2E282A

  this.css = css
  
  this.rem = 16
  this.fontMain = ['Roboto', 100, 300, 600]
  this.fontAlt = ['Cuprum', 100, 300, 600]
  this.fontMono = ['RobotoMono', 100, 300, 600]
  this.accent = ['transparent', accent, accent.lighten(0.4), accent.lighten(0.67)]
  this.ink = ['transparent', ink, ink.lighten(0.45), ink.lighten(0.95)]
  this.canvas = ['transparent', canvas, canvas.darken(0.2), canvas.darken(0.4)]
  this.color =  [0, this.canvas, this.ink, this.accent]
  this.weight = [0, 0.0625, 0.125, 0.25, 0.5, 1.25, 2.5]
  this.roundness = [0, 0.25, 0.5, 100000]
  this.elevation = [0, 0.125, 0.25, 0.5]  // For box-shadow
}

Theme.prototype.shade = function shade({shade, accent}) {
  return accent ? this.accent[Math.abs(shade)] : shade < 0 ? this.canvas[shade * -1] : this.ink[shade]
}

Theme.prototype.colorAndWeight = function colorAndWeight({shade, accent, weight, color}) {
  return {
    color: color && color[0] && (this.color[color[0]])[color[1] || 1].alpha(color[2] || 1) || (accent ? this.accent[Math.abs(shade)] : shade < 0 ? this.canvas[shade * -1] : this.ink[shade]),
    // color: accent ? this.accent[Math.abs(shade)] : shade < 0 ? this.canvas[shade * -1] : this.ink[shade],
    weight: this.weight[weight],
  }
}

Theme.prototype.parse = function parse(props) {
  var out = {face: null, fill: null, stroke: null, outline: null}
  for (var name in out) {
    out[name] = props[name] && this.colorAndWeight(props[name])
  }
  out.pad = this.weight[props.pad]
  out.round = this.roundness[props.round]
  out.elevate = this.elevation[props.elevate]
  return out
}


module.exports = Theme
