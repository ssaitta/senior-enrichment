import axios from 'axios'

//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS'

//ACTION CREATORS  
export function getStudents(students){
    const action = {
        type: GET_STUDENTS,
        students: students
    }
    return action
}

//THUNKS
export function fetchStudents(){
    return function thunk(dispatch){
        return axios.get('/api/students')
            .then(res=>res.data)
            .then(students=> {
                dispatch(getStudents(students))})
            .catch(err=>consle.log(err.message))
    }
}

//REDUCER

export default function StudentsReducer(state = [], action){
    if(action.type===GET_STUDENTS){
        return action.students
    }
    else{
        return state;
    }
}