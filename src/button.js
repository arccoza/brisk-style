'use strict'
const undefined = void 0


function button({stroke=0, fill=0, face=0, outline=0, elevation=0, roundness=0}={}) {
  stroke = stroke ? `0 0 0 ${this.strokeWeight[stroke.weight || 1]}rem ${this.shade(stroke)} inset` : ''
  outline = outline ? `0 0 0 ${this.strokeWeight[outline.weight || 1]}rem ${this.shade(outline)}` : ''
  var elevationVal = this.elevation[elevation.value]
  elevation = elevation ? `0 ${elevationVal}rem ${elevationVal+elevationVal}rem ${this.shade(elevation)}` : ''
  stroke = [stroke, outline, elevation].reduce((s, v) => (v ? `${s}, ${v}` : s))
  var borderRadius = `${this.roundness[roundness]}rem`
  fill = fill ? this.shade(fill) : ''
  var fontWeight = face && face.weight ? this.fontWeight[face.weight] : null
  var color = face ? this.shade(face).toString() : ''


  var style = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0.4em 0.8em',
    // fontWeight: this.text[2],
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.15s, color 0.15s, fill 0.15s, box-shadow 0.15s',
  }

  var diff = {
    backgroundColor: fill.toString(),
    color,
    fontWeight,
    borderRadius,
    boxShadow: stroke,
  }

  Object.assign(style, diff)
  

  return this.css ? this.css(style) : style
}


module.exports = button
