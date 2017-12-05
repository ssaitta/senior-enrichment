'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store'
//import Root from './components/Root'
//import Home from './components/Home'
import Campuses from './components/Campuses'
import Students from './components/Students'
import Footer from './components/Footer'

render (
  <Provider store={store}>
    <Router>
      <div className="Campuses">
        <div className="nav-bar">
        <Route exact path="/campuses" component={Campuses}/>
        </div>
        <div>
          <Campuses />
        </div>
          <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)