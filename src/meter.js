'use strict'
const undefined = void 0
const box = require('./box.js')


function meter(props) {
  var style = box.call(this, props), {x1=0, x2=1} = props
  style.backgroundImage = `repeating-linear-gradient(90deg, transparent 0%, transparent calc(10% - 1px), rgba(255,0,0,0.5) 10%), `
  style.backgroundImage += bgSvg({rem: this.rem, color:style.color, weight:1, x1:0, x2:1, r:0})
  console.log(style.backgroundImage.replace(/[\n\r]/g, ''))

  var more = {
    position: 'relative',
    width: '200px',
    height: '1em',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
  }

  var size = x2 - x1, pos = x1 / (1 - size)

  var diff = {
    backgroundPosition: `center, ${pos * 100}% center`,
    backgroundSize: `100%, ${size * 100}% 100%`,
  }

  Object.assign(style, more, diff)
  return this.css ? this.css(style) : style
}

// function bgSvg() {
// return `
// url('data:image/svg+xml;utf8,
// <svg xmlns="http://www.w3.org/2000/svg" width="100" height="10"
//   style="padding:0 0em; overflow:visible;" overflow="visible">
//   <svg x="1em" overflow="visible">
//     <rect id="r" x="0em" stroke="black" fill="green" width="100%" height="100%"/>
//   </svg>
// </svg>
// ')
// `
// }

// function bgSvg({color, weight}) {
// return `
// url('data:image/svg+xml;utf8,
// <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
//   style="">
//   <style>
//     /* <![CDATA[ */
//     line {
//       stroke: ${color};
//       stroke-width: ${weight}em;
//       stroke-dasharray: 68% 136%;
//       stroke-dashoffset: -0%;
//       stroke-linecap: round;
//     }
//     /* ]]> */
//   </style>
//   <line x1="0" y1="50%" x2="100%" y2="50%"/>
// </svg>
// ')
// `
// }

function bgSvg({rem, color, weight, x1=0, x2=1, r=1}) {
return `
url('data:image/svg+xml;utf8,
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="${weight}rem"
  style="font-size:${rem}px;">
  <rect x="${x1 * 100}%" width="${(x2 - x1) * 100}%" height="100%" rx="${Math.min(r, weight / 2)}rem" fill="${color}" />
</svg>
')
`
}

module.exports = meter
