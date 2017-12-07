import React from 'react'
import store from '../store/index.js'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const mapStateToProps = function (state) {
    return {
        students: state.students,
    }
}

export function Students(props) {

    const { students } = props

    return (
        <div className="Students-page">
            <h1>Our Students</h1>
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
                                <Link to={`/students/${student.id}`}>
                                    <td>{student.name}</td>
                                </Link>
                                    <td>{student.campus.name}</td>
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


export default connect(mapStateToProps)(Students)