import React, { Component } from 'react'
import store, { fetchStudents, fetchCampuses, destroyStudent } from '../store/index.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Students extends Component {

    componentDidMount() {
        //fetch all students thunk
        const studentsThunk = fetchStudents()
        store.dispatch(studentsThunk)
        
        const campusesThunk = fetchCampuses()
        store.dispatch(campusesThunk)
    }

    render() {
        const { students, campuses } = this.props
    
        return (
        <div className="Students-page">
            <h1>Our Students</h1>
            <Link to={`/students/newStudent`} className="AddAStudentButton">
                Add a new student
            </Link>
            <br/>
            <section className="Students-all">
                <table className="Student-table">
                <tbody>
                    <tr>
                        <th>Student Number</th>
                        <th>Student Name</th>
                        <th>Favorite Place on Campus</th>
                        <th></th>
                    </tr>
            {students.map(student => {
                if(student){
                return (
                    <tr key={student.id} className="Student-row">
                        <td>{student.id}</td>
                        <td>
                            <Link to={`/students/${student.id}`}>
                                {student.name}
                            </Link>
                        </td>
                        <td>
                            {student.campusId ?
                                <Link to={`/campuses/${student.campusId}`}> 
                                {(this.props.campuses.find((campus)=>{return campus.id===student.campusId}))?
                                this.props.campuses.find((campus)=>{return campus.id===student.campusId}).name: student.campusId
                                 }
                                </Link>
                                : null
                            }
                        </td>
                        <td>
                        <button onClick={(e)=>{this.props.deleteStudent(e, student.id, student)}}>x</button>
                        </td>
                    </tr>
                )}
                })}
            
                </tbody>
                </table>

            </section>
            </div>
        )
    }
}


const mapStateToProps = function (state) {
    return {
        students: state.students,
        campuses: state.campuses

    }
}

const mapDispatchToProps = function(dispatch){
    return{
        deleteStudent(event, id, student){
            dispatch(destroyStudent(id, student))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)