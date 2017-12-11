import axios from 'axios'

//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS'
const CREATE_STUDENT = "CREATE_STUDENT"
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DESTROY_STUDENT = "DESTROY_STUDENT"

//ACTION CREATORS  
export function getStudents(students){
    const action = {
        type: GET_STUDENTS,
        students: students
    }
    return action
}

export function createStudent(student){
    const action={
        type: CREATE_STUDENT,
        student: student
    }
    return action
}

export function updateStudent(student){
    const action = {
        type: UPDATE_STUDENT,
        student: student
    }
    return action
}

export function destroy_student(student){
    const action = {
        type: DESTROY_STUDENT,
        student: student
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
            .catch(err=>console.log(err.message))
    }
}

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

export function putStudent(id, updatedStudent){
    return function thunk(dispatch){
        return axios.put(`/api/students/${id}`,updatedStudent)
            .then(res=>res.data)
            .then(updatedStudent=> {
                dispatch(updateStudent(updatedStudent))})
            .catch(err=>console.log(err.message))
    }
}

export function destroyStudent(id, studentToDestroy){
    return function thunk(dispatch){
        return axios.delete(`api/students/${id}`,studentToDestroy)
            .then(res=>res.data)
            .then(()=>{
                dispatch(destroy_student(studentToDestroy))
            })
            .catch(err=>console.log(err.message))
    }
}

//REDUCER

export default function StudentsReducer(state = [], action){
    if(action.type===GET_STUDENTS){
        return action.students
    }
    else if(action.type===CREATE_STUDENT){
        return [...state.students,action.student]
    }
    else if(action.type === UPDATE_STUDENT){
        return state.map((student)=>{
            if(+student.id === +action.student.id){
                return action.student
            }
            else{
                return student
            }
        })
    }
    else if(action.type === DESTROY_STUDENT){
        return(
            [...state.slice(0,state.indexOf(action.student)),
            ...state.slice(state.indexOf(action.student)+1)]
        )
    }
    else{
        return state;
    }
}