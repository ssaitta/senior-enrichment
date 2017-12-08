import React, { Component } from 'react'
import store, { createNewStudent } from '../store/index.js'
import { connect } from 'react-redux'

const mapStateToProps = function (state) {
    return {
        student: state.student
    }
}

const mapDispatchToProps = function(dispatch){
    return{
        handleSubmit(event,newStudent){
            event.preventDefault()
            dispatch(createNewStudent(newStudent))
            //this.history.push('/students')
        }
    }
}


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

    handleChange(event, stateproperty) {
        switch (stateproperty) {
            case 'first_name':
                return this.setState({ first_name: event.target.value })
            case 'last_name':
                return this.setState({ last_name: event.target.value })
            case 'email':
                return this.setState({ email: event.target.value })
            case 'gpa':
                return this.setState({ gpa: event.target.value })
            // case 'campusId':
            //     return this.setState({ campusId: event.target.value })
        }
    }

    render() {
        const newStudent = Object.assign({}, this.state)
        const { student } = this.props

        console.log(newStudent)
        return (
            <form onSubmit={(e)=>this.props.handleSubmit(e,newStudent)}>
                <div>
                    <label>First Name</label>
                    <input
                        value={this.state.first_name}
                        onChange={(e) => this.handleChange(e, 'first_name')}>
                    </input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        value={this.state.last_name}
                        onChange={(e) => this.handleChange(e, 'last_name')}>
                    </input>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e, 'email')}>
                    </input>
                </div>
                <div>
                    <label>GPA</label>
                    <input
                        value={this.state.gpa}
                        onChange={(e) => this.handleChange(e, 'gpa')}>
                    </input>
                </div>
                {/*<div>
                    <label>campusId</label>
                    <input
                        value={this.state.campusId}
                        onChange={(e) => this.handleChange(e, 'campusId')}>
                    </input>
                </div> */}
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewStudent)
