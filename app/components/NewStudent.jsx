import React, { Component } from 'react'
import store, { createNewStudent } from '../store/index.js'
import { connect } from 'react-redux'


class NewStudent extends Component {

    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            gpa: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const newStudent = Object.assign({}, this.state)
        const { student } = this.props

        return (
            <form onSubmit={(e) => this.props.handleSubmit(e, newStudent)}>
                <div>
                    <label>First Name</label>
                    <input
                        value={this.state.first_name}
                        type="text"
                        name="first_name"
                        onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        value={this.state.last_name}
                        type="text"
                        name="last_name"
                        onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        value={this.state.email}
                        type="text"
                        name="email"
                        onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>GPA</label>
                    <input
                        type="text"
                        name="gpa"
                        value={this.state.gpa}

                        onChange={this.handleChange}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        student: state.student
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleSubmit(event, newStudent) {
            event.preventDefault()
            dispatch(createNewStudent(newStudent))
            this.history.push('/students')
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent)
