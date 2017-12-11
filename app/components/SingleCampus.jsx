import React, {Component} from 'react'
import store, {fetchCampusById} from '../store/index.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class SingleCampus extends Component{

    componentDidMount(){
        const campusId = +this.props.match.params.campusId
        this.props.fetchCampusById(campusId)
    }

    render(){
        const {campus} = this.props

        if(!this.props.campus.students){
            return <div>None of our ungrateful students like this part of our amazing campus</div>
        }

        const students = this.props.campus.students //is an array

        return(
            <div className="SingleCampus">
            <h1>{campus.name}</h1>
            <section className="Single-Campus-features">
                <img src={campus.imageUrl} className="SingleCampusImage"/>
                <p className="CampusDescription">{campus.description}</p>
            </section>
            <br/>
            <section>
                <p>Some of the students you might find here!</p>
                {
                    students.map(student=>(
                    <ul key={student.id} className="CampusesStudentList">
                        <Link to={`/students/${student.id}`}>
                            <li>{student.name}</li>
                        </Link>
                    </ul>
                ))}
            </section>
            </div>
        )
        
    }
}


const mapStateToProps = function(state){
    return{
        campus: state.campus
    } 
}

const mapDispatchToProps = function(dispatch){
    return{
        fetchCampusById(campusId){
            dispatch(fetchCampusById(campusId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)