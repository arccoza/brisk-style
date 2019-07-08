'use strict'
const undefined = void 0


function box({stroke=0, fill=0, face=0, outline=0, elevation=0, roundness=0}={}) {
  // console.log(this.parse({stroke, fill, face, outline, elevation, roundness}))
  var vals = this.parse({stroke, fill, face, outline, elevation, roundness})
  var color = vals.face && vals.face.color.toString()
  var backgroundColor = vals.fill && vals.fill.color.toString()
  var boxShadow = [
    vals.stroke && `0 0 0 ${vals.stroke.weight || 0}rem ${vals.stroke.color} inset`,
    vals.outline && `0 0 0 ${vals.outline.weight || 0}rem ${vals.outline.color}`,
    vals.elevation && `0 ${vals.elevation || 0}rem ${vals.elevation * 2}rem ${'rgba(0,0,0,0.5)'}`,
  ].filter(v => v).join(',')
  var borderRadius = `${vals.roundness}rem`

  return {
    color,
    backgroundColor,
    boxShadow,
    borderRadius,
  }
}


module.exports = box
