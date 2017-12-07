import React, { Component } from 'react'
import store, {fetchCampuses, fetchStudents} from '../store/index.js'
import { Route, Switch, Link } from 'react-router-dom';

import Campuses from './Campuses'
import Students from './Students'
import Footer from './Footer'
import Navigation from './Navigation'
import singleStudent from './SingleSudent'


export default class Main extends Component {

    componentDidMount() {
        //fetch all campuses thunk
        const campusesThunk = fetchCampuses()
        store.dispatch(campusesThunk)

        //fetch all students thunk
        const studentsThunk = fetchStudents()
        store.dispatch(studentsThunk)

    }

    render() {
        return(
            <div>
                <Link to='/'>
                    <img className="headImage" src="/images/bigLogo.jpg" />    {/* this actually being rendered as part of the HTML and whenever the browser knows that to find any of its staticly served sources to look in the public file already. So, we are already looking in the public fiolder and serving up from the public folder already becuase of the express static middleware, so anytime it sees src it looks in public*/}
                </Link>
                <header>
                   <Navigation/>
                </header>
                <Switch>
                    <Route exact path="/students" component={Students} />
                    <Route exact path="/campuses" component={Campuses} />
                    <Route path="/students/:student.id" component={singleStudent} />
                </Switch>
                <Footer />
            </div>
        )}
}

