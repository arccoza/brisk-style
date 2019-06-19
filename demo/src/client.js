'use strict'
const undefined = void 0
import Theme from '../../src/theme'
import button from '../../src/button'
import {css, jsx} from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'


Theme.prototype.button = button

var th = new Theme({css})


function Button(props) {
  return jsx('div', {css: th.button({stroke:{shade:1}, fill:{shade:3}, face: {shade:1, accent:0}, elevation:{shade:2, value:3}, roundness:2})}, 'hello')
}


ReactDOM.render(
  Button(),
  document.getElementById('root')
)
