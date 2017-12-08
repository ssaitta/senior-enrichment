import React, {Component} from 'react'
import store, {fetchCampuses} from '../store/index.js'
import {connect} from 'react-redux'
import {Route, Switch, Link } from 'react-router-dom'

const mapStateToProps = function(state){
    return{
        campuses: state.campuses
    }
}

class Campuses extends Component {
    
    componentDidMount() {
        //fetch all campuses thunk
        const campusesThunk = fetchCampuses()
        store.dispatch(campusesThunk)
    }

    render(){
    const {campuses} = this.props
    return(
        <div className="Campuses">
            <h1>Welcome to Sunnydale High!</h1>
                <Link to={`/campuses/newCampus`} className="AddACampusButton">
                Build a campus feature
                </Link>
            <section className="Campus-features">
            {campuses.map(campus =>(
                <div key={campus.id} className="CampusImages">
                <Link to={`/campuses/${campus.id}`}>
                <h3 className="CampusName"><span>{campus.name}</span></h3>
                    <img src={campus.imageUrl}/>
                        <p>{campus.description}</p>
                    </Link>
                </div>
            ))}
            </section> 
        </div>
    )}
}


export default connect(mapStateToProps)(Campuses)
