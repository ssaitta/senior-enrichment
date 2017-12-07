import React from 'react'
import store from '../store/index.js'
import {connect} from 'react-redux'

const mapStateToProps = function(props){
    return{
        campuses: campuses,
        students: students
    }
}

export function SingleStudent(props){
    const {students} = props
    const {campuses} = props
    console.log(props)

    return(
        <div className="Single-Student-Page">
        SingleStudent
        
        </div>
    )
}

export default connect(mapStateToProps)(SingleStudent)