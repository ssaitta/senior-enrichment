'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

console.log(store.getState())

import Main from './components/main'


render(    //this redner is ReactDOM.render because of how we imported it.
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('main')
)

