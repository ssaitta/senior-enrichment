import React, {Component} from 'react'
import store, {fetchCampuses} from '../store/index.js'
import {connect} from 'react-redux'
import axios from 'axios'

// export function Component(props){
//     constructor(){
//         super();
//         this.state ={
//             campuses: []
//         }
//     }

//     componentDidMount(){
//         axios.get('./api/campuses')
//             .then(res=>res.data)
//             .then(campuses=>{
//                 this.setState({campuses})
//             })

//     }

//     render(){

export function Campuses(props){

    const campuses = props.campuses

    return(
        <div className="Campuses">
            <h1>Welcome to Sunnydale High!</h1>
            <section className="Campus-features">
            {campuses.map(campus =>(
                <div key={campus.id} className="CampusImages">
                    <h3 className="CampusName"><span>{campus.name}</span></h3>
                    <img src={campus.imageUrl}/>
                    <p>{campus.description}</p>
                </div>
            ))}
            </section>    
        </div>
    )
}

const mapStateToProps = function(state){
    return{
        campuses: state.campuses
    }
}

export default connect(mapStateToProps)(Campuses)
