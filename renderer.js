

import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/main.jsx'
import './less/styles.less'

window.onload = function(){
  ReactDOM.render(<Main/>, document.getElementById('app'))
}