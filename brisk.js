'use strict'
const undefined = void 0
const {toCss} = require('./src/util')
const Theme = require('./src/theme')
const button = require('./src/button')
const {css, jsx} = require('@emotion/core')


// Theme.prototype.switch = function({isActive=false, size=1, strokeColor=null, strokeWidth=1, fill=null}={}) {
//   var width = 2.5, height = 1.2
//   var toggleGap = 0.23, toggleSize = height / 2 - toggleGap, togglePos = width / 2 - toggleSize - toggleGap

//   var base = {
//     position: 'relative',
//     width: `${width}em`,
//     height: `${height}em`,
//     boxShadow: `0 0 0 ${this.lineLight}em inset ${this.lineColor.rgb()}`,
//     backgroundImage: `radial-gradient(closest-side circle, ${this.accent.alpha(0.4).rgb()} ${toggleSize}em, ${this.accent.alpha(0).rgb()} calc(${toggleSize}em + 1px))`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: `-${togglePos}em center`,
//     borderRadius: '100000px',
//     backgroundOrigin: 'padding-box',
//     transition: 'background-color 0.4s, background-position 0.4s, box-shadow 0.4s',
//   }

//   var active = {
//     boxShadow: `0 0 0 ${this.lineLight}em inset ${this.lineColor.alpha(0).rgb()}`,
//     backgroundPosition: `${togglePos}em center`,
//     backgroundColor: this.accentMuted.rgb(),
//     backgroundImage: `radial-gradient(closest-side circle, ${this.accent.rgb()} ${toggleSize}em, ${this.accent.alpha(0).rgb()} calc(${toggleSize}em + 1px))`,
//   }

//   return isActive ? active : base
// }

Theme.prototype.button = button

var th = new Theme({css})

// var styles =
// `
// .button {
//   ${toCss(th.button({stroke:true}))}
// }
// .button:hover {
//   ${toCss(th.button({accent:true, fill:true}))}
// }
// .button:focus {
//   ${toCss(th.button({accent:true, fill:true, outline:true}))}
// }
// `

function Button(props) {
  return jsx('div', {css: th.button({stroke:true})}, 'hello')
}


console.log(Button())