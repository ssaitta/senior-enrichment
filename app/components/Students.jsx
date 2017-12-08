import React, { Component } from 'react'
import store, { fetchStudents} from '../store/index.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Students extends Component {

    componentDidMount() {
        //fetch all students thunk
        const studentsThunk = fetchStudents()
        store.dispatch(studentsThunk)
    }

    render() {
        const { students } = this.props

        return (
        <div className="Students-page">
            <h1>Our Students</h1>
            <Link to={`/students/newStudent`} className="AddAStudentButton">
                Add a new student
            </Link>
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
                                    {student.campus.name}
                                </Link>
                                : ""
                            }
                        </td>
                        <td>x</td>
                    </tr>
                )
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
    }
}


export default connect(mapStateToProps)(Students)