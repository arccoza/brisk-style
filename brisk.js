'use strict'
const undefined = void 0
const Color = require('color')
const {kase} = require('kase')


function toCss(obj) {
  var keys = Object.keys(obj), css = ''
  for (var i = 0, k, v; k = keys[i], v = obj[k], i < keys.length; i++)
    css += `${kase(k, 'kebab')}: ${v};\n`
  return css
}

function Theme() {
  this.accent = Color('rgba(103, 61, 171, 1)')
  this.accentMuted = this.accent.alpha(0.4)
  this.bgPrimary = Color('#FFF')
  this.bgSecondary = this.bgPrimary.darken(0.2)
  this.lineColor = Color('#CCC')
  this.lineLight = 0.06
  this.lineRegular = 0.1
  this.lineBold = 0.16
}

Theme.prototype.switch = function({isActive=false, size=1, strokeColor=null, strokeWidth=1, fill=null}={}) {
  var width = 2.5, height = 1.2
  var toggleGap = 0.23, toggleSize = height / 2 - toggleGap, togglePos = width / 2 - toggleSize - toggleGap

  var base = {
    position: 'relative',
    width: `${width}em`,
    height: `${height}em`,
    boxShadow: `0 0 0 ${this.lineLight}em inset ${this.lineColor.rgb()}`,
    backgroundImage: `radial-gradient(closest-side circle, ${this.accent.alpha(0.4).rgb()} ${toggleSize}em, ${this.accent.alpha(0).rgb()} calc(${toggleSize}em + 1px))`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `-${togglePos}em center`,
    borderRadius: '100000px',
    backgroundOrigin: 'padding-box',
    transition: 'background-color 0.4s, background-position 0.4s, box-shadow 0.4s',
  }

  var active = {
    boxShadow: `0 0 0 ${this.lineLight}em inset ${this.lineColor.alpha(0).rgb()}`,
    backgroundPosition: `${togglePos}em center`,
    backgroundColor: this.accentMuted.rgb(),
    backgroundImage: `radial-gradient(closest-side circle, ${this.accent.rgb()} ${toggleSize}em, ${this.accent.alpha(0).rgb()} calc(${toggleSize}em + 1px))`,
  }

  return isActive ? active : base
}

var th = new Theme()
console.log(toCss(th.switch()))