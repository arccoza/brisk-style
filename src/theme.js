'use strict'
const undefined = void 0


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


module.exports = {Theme}
