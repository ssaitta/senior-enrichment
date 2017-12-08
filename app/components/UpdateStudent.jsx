import React, { Component } from 'react'
import store, { putStudent, fetchStudentById, fetchCampuses } from '../store/index.js'
import { connect } from 'react-redux'

class UpdateStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: this.props.student.first_name,
            last_name: this.props.student.last_name,
            email: this.props.student.email,
            gpa: this.props.student.gpa,
           campusId: this.props.student.campusId
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const studentId = +this.props.match.params.studentId
        this.props.fetchStudentById(studentId)
        //Now this.props.student is the student we are on. 
        this.props.fetchCampuses()
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const updatedStudent = Object.assign({},this.state)
        const {student} = this.props
        const studentId = student.id
        const {campuses} = this.props
        let CampusName
        let CampusId
        
        if(!student.campus){
            CampusName = ""
            CampusId=""
        }
        else{
            CampusName = student.campus.name
            CampusId = student.campusId
        }
        
        console.log("updatedStudent: ",updatedStudent)
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e, studentId, updatedStudent)}>
                <div>
                    <label>First Name</label>
                    <input
                        value={this.state.first_name}
                        type="text"
                        name="first_name"
                        placeholder={`${student.first_name}`}
                        onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        value={this.state.last_name}
                        type="text"
                        name="last_name"
                        placeholder={`${student.last_name}`}
                        onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        value={this.state.email}
                        type="text"
                        name="email"
                        placeholder={`${student.email}`}
                        onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>GPA</label>
                    <input
                        value={this.state.gpa}
                        type="text"
                        name="gpa"
                        placeholder={`${student.gpa}`}
                        onChange={this.handleChange}></input>
                </div>
                {/*}
                <div>
                    <label>Favorite place on campus</label>
                    <select
                    value={this.state.campusId}
                    name="campusId"
                    onChange={this.handleChange}>
                    {campuses.map((campus)=>{
                        return(
                            (+campus.id===+student.campusId)?
                            <option key={campus.id} selected>{campus.id}</option>
                            : <option key={campus.id}>{campus.id}</option>
                        )
                    })}
                    </select>
                </div>*/}
           
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        student: state.student,
        campuses: state.campuses
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleSubmit(event, studentId, updatedStudent) {
            event.preventDefault()
            dispatch(putStudent(studentId, updatedStudent))
            this.history.push('/students')
        },
        fetchStudentById(studentId) {
            dispatch(fetchStudentById(studentId))
        },
        fetchCampuses(){
            dispatch(fetchCampuses())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent)