import axios from 'axios'

//ACTION TYPE
const GET_STUDENT = "GET_STUDENT"

//ACTION CREATOR
export function getStudent(student){
    const action = {
        type: GET_STUDENT,
        student: student
    }
    return action
}

//THUNK CREATOR
export function fetchStudentById(studentId){
    return function thunk(dispatch){
        return axios.get(`./api/students/${studentId}`)
            .then(res=>res.data)
            .then(foundStudent =>{
                dispatch(getStudent(foundStudent))
            })
            .catch(err=>console.log(err.message))
    
    }
}

//REDUCER
export default function SingleStudentReducer(state = {}, action){
    if(action.type===GET_STUDENT){
        return action.student
    }
    else{
        return state
    }
}