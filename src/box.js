'use strict'
const undefined = void 0


function box({stroke=0, fill=0, face=0, outline=0, elevation=0, roundness=0}={}) {
  stroke = stroke ? `0 0 0 ${this.strokeWeight[stroke.weight || 1]}rem ${this.shade(stroke)} inset` : ''
  outline = outline ? `0 0 0 ${this.strokeWeight[outline.weight || 1]}rem ${this.shade(outline)}` : ''
  var elevationVal = this.elevation[elevation.value]
  elevation = elevation ? `0 ${elevationVal}rem ${elevationVal+elevationVal}rem ${this.shade(elevation)}` : ''
  stroke = [stroke, outline, elevation].reduce((s, v) => (v ? `${s}, ${v}` : s))
  var borderRadius = `${this.roundness[roundness]}rem`
  fill = fill ? this.shade(fill) : ''
  var fontWeight = face && face.weight ? this.fontWeight[face.weight] : null
  var color = face ? this.shade(face).toString() : ''

  return {
    backgroundColor: fill.toString(),
    color,
    fontWeight,
    borderRadius,
    boxShadow: stroke,
  }
}


module.exports = box
