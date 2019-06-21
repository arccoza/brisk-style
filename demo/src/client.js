'use strict'
const undefined = void 0
import Theme from '../../src/theme'
import button from '../../src/button'
import meter from '../../src/meter'
import {css, jsx} from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'


Theme.prototype.button = button
Theme.prototype.meter = meter

var th = new Theme({css})


function Button(props) {
  return jsx('div', {css: th.button({stroke:{shade:1}, fill:{shade:3}, face: {shade:1, accent:0}, elevation:{shade:2, value:3}, roundness:2})}, 'hello')
}

function Meter(props) {
  return jsx('div', {css: th.meter({stroke:{shade:0}, fill:{shade:3, accent:1, weight:1}, face: {shade:1, accent:1}, roundness:2})})
}


ReactDOM.render(
  Meter(),
  document.getElementById('root')
)
