'use strict'
const undefined = void 0
const {dataUrl} = require('./util.js')
const box = require('./box.js')


function meter(props) {
  var style = box.call(this, props), {x1=0, x2=1, roundness=0, pad=0} = props
  var fillWeight = this.strokeWeight[props.fill && props.fill.weight || 2]
  var faceWeight = this.strokeWeight[props.face && props.face.weight || 2]
  pad = this.strokeWeight[pad || 0]
  style.backgroundImage = bgSvg({rem: this.rem, color:style.color, weight:faceWeight, x1:0, x2:1, r:this.roundness[roundness]})

  var more = {
    position: 'relative',
    width: '200px',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'content-box',
  }

  var len = x2 - x1, pos = x1 / (1 - len)
  var diff = {
    height: `${fillWeight}rem`,
    padding: `${pad}rem`,
    backgroundPosition: `${pos * 100}% center`,
    backgroundSize: `${len * 100}% 100%`,
  }

  Object.assign(style, more, diff)
  return this.css ? this.css(style) : style
}

function bgSvg({rem, color, weight, x1=0, x2=1, r=1}) {
return dataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="${weight}rem"
  style="font-size:${rem}px;">
  <rect x="${x1 * 100}%" width="${(x2 - x1) * 100}%" height="100%" rx="${Math.min(r, weight / 2)}rem" fill="${color}" />
</svg>
`, {type: 'svg', enc:'base64'})
}

module.exports = meter
