import React from 'react'
import store from '../store/index.js'
import {connect} from 'react-redux'
import {Route, Switch, Link } from 'react-router-dom'

const mapStateToProps = function(state){
    return{
        campuses: state.campuses
    }
}

export function Campuses(props){
    
    const {campuses} = props
    return(
        <div className="Campuses">
            <h1>Welcome to Sunnydale High!</h1>
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
    )
}


export default connect(mapStateToProps)(Campuses)
