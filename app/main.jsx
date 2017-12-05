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
import Navigation from './components/Navigation'

render (
  <Provider store={store}>
    <Router>
      <div>
        <header>
          <Navigation />
        </header>
        <Route exact path="/campuses" component={Campuses}/>
          <Campuses />
          <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)