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
  return jsx('div', {css: th.button({stroke:true})}, 'hello')
}

var butt = React.createElement('button', 'oi')

ReactDOM.render(
  Button(),
  document.getElementById('root')
)
