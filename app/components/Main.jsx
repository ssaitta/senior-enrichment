import React, { Component } from 'react'
import store, {fetchCampuses, fetchStudents} from '../store/index.js'
import { Route, Switch, Link } from 'react-router-dom';

import Campuses from './Campuses'
import Students from './Students'
import Footer from './Footer'
import Navigation from './Navigation'
import SingleSudent from './SingleSudent'
import SingleCampus from './SingleCampus'
import NewCampus from './NewCampus'
import NewStudent from './NewStudent'
import UpdateStudent from './UpdateStudent'


export default function Main(props) {

return(
    <div>
        <Link to='/'>
            <img className="headImage" src="/images/bigLogo.jpg" />    {/* this actually being rendered as part of the HTML and whenever the browser knows that to find any of its staticly served sources to look in the public file already. So, we are already looking in the public fiolder and serving up from the public folder already becuase of the express static middleware, so anytime it sees src it looks in public*/}
        </Link>
        <header>
            <Navigation/>
        </header>
        <Switch>
            <Route exact path="/campuses/newCampus" component={NewCampus}/>
            <Route exact path="/students/newStudent" component={NewStudent}/>
            <Route exact path="/students/:studentId/updateStudent" component={UpdateStudent}/>
            <Route path="/students/:studentId" component={SingleSudent} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/campuses" component={Campuses} />
        </Switch>
        <Footer />
    </div>
)}

