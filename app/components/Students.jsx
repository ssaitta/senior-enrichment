import React from 'react'
import store from '../store/index.js'
import { connect } from 'react-redux'

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
                        </tr>
                        {students.map(student => {
                            return (
                                <tr key={student.id} className="Student-row">
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.campus.name}</td>
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