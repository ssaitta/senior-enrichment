import React, {Component} from 'react'
import store, {fetchStudentById} from '../store/index.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class SingleStudent extends Component{
    
    
    componentDidMount(){
        const studentId = +this.props.match.params.studentId
        this.props.fetchStudentById(studentId)
    }
    
    render(){
        const student = this.props.student
        let CampusName = "fillerCampus"
        let CampusId = "1"
            if(this.props.student.campus){
                CampusName = this.props.student.campus.name
                CampusId = this.props.student.campus.id
            }

 
        return(
            <div className="SingleStudentPage">
            <h1>{student.name}</h1>
            <section className="Students-Info">
                <table className="SingleStudent-table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>GPA</th>
                            <th>Favorite Place on Campus</th>
                            <th></th>
                        </tr>
                            <tr className="Student-Info-row">
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.gpa}</td>
                            <Link to={`/campuses/${CampusId}`}>
                                <td>{CampusName}</td>
                            </Link>
                                <td>x</td>
                            </tr>
                    </tbody>
                </table>
        
        </section>
        </div>
            )
    }
    
        
}
    
    
const mapStateToProps = function(state){
    console.log('state: ',state)
    return{
        student: state.student
    }
}

const mapDispatchToProps = function(dispatch){
    return{
        fetchStudentById(studentId){
            dispatch(fetchStudentById(studentId))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SingleStudent)