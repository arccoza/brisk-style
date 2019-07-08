'use strict'
const undefined = void 0


function box({stroke=0, fill=0, face=0, outline=0, elevate=0, round=0}={}) {
  console.log(this.parse({stroke, fill, face, outline, elevate, round}))
  var vals = this.parse({stroke, fill, face, outline, elevate, round})
  var color = vals.face && vals.face.color.toString()
  var backgroundColor = vals.fill && vals.fill.color.toString()
  // var border = `${vals.stroke.weight || 0}rem solid ${vals.stroke.color}`
  var boxShadow = [
    vals.stroke && `0 0 0 ${vals.stroke.weight || 0}rem ${vals.stroke.color} inset`,
    vals.outline && `0 0 0 ${vals.outline.weight || 0}rem ${vals.outline.color}`,
    vals.elevate && `0 ${vals.elevate || 0}rem ${vals.elevate * 2}rem ${'rgba(0,0,0,0.5)'}`,
  ].filter(v => v).join(',')
  var borderRadius = `${vals.round}rem`

  return {
    color,
    backgroundColor,
    boxShadow,
    borderRadius,
    // border,
  }
}


module.exports = box
