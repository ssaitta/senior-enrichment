import axios from 'axios'

//ACTION TYPE 
const CREATE_STUDENT = "CREATE_STUDENT"

//ACTION CREATOR
export function createStudent(student){
    const action={
        type: CREATE_STUDENT,
        student: student
    }
    return action
}

//THUNK CREATOR
export function createNewStudent(student){
    return function thunk(dispatch){
        return axios.post('api/students',student)
        .then(res=>res.data)
        .then(createdStudent=>{
            dispatch(createStudent(createdStudent))
        })
        .catch(err=>console.log(err.message))
    }
}

//REDUCER
export default function newStudentReducer(state={},action){
    if(action.type === CREATE_STUDENT){
        return Object.assign({},state,{students:[...state.students,action.student]})
    }
    else{
        return state
    }
}