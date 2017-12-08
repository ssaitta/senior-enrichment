import axios from 'axios'

//ACTION TYPE
const CREATE_CAMPUS = "CREATE_CAMPUS"

//ACTION CREATOR
export function createCampus(campus){
    const action ={
        type:CREATE_CAMPUS,
        campus: campus //somthing is wrong here there is an error message in the browser console when I add a campus
    }
    return action
}

//THUNK CREATOR
export function createNewCampus(campus){
    return function thunk(dispatch){
        return axios.post('/api/campuses',campus)
        .then(res=>res.data)
        .then(createdCampus=>{
            dispatch(createCampus(createdCampus))
        })
        .catch(err=>console.log(err.message))
    }
}

//REDUCER
export default function newCampusReducer(state={},action){
    if(action.type === CREATE_CAMPUS){
        return Object.assign({}, state, {campuses:[...state.campus,action.campus]})
    }
    else{
        return state
    }
} 