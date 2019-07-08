'use strict'
const undefined = void 0
import Theme from '../../src/theme'
import button from '../../src/button'
import meter from '../../src/meter'
import toggle from '../../src/toggle'
import {css, jsx} from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'


Theme.prototype.button = button
Theme.prototype.meter = meter
Theme.prototype.toggle = toggle

var th = new Theme()


function Button(props={}) {
  return jsx('div', {css: css(th.button({stroke:{color: [2, 2], weight:1}, fill:{color: [2, 3, 1]}, face: {color: [2, 1]}, elevate:3, round:2}))}, 'hello')
}

function Meter(props={}) {
  return jsx('div', {css: css(th.meter({x1: 0.3, x2: 0.9, stroke:{shade:0}, fill:{shade:3, accent:1, weight:3}, face: {shade:1, accent:1, weight:2}, roundness:2}))})
}

function Toggle(props={}) {
  return jsx('input', {
    css: css(th.toggle()),
    type: 'checkbox',
    defaultChecked:props.active,
    onClick: ev => props.update && props.update({active: !props.active})
  })
}


ReactDOM.render(
  Button(),
  document.getElementById('root')
)
