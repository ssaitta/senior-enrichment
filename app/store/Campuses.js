import axios from 'axios'

//ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES'
const CREATE_CAMPUS = "CREATE_CAMPUS"

//ACTION CREATORS
export function getCampuses(campuses){
   const action = {
        type: GET_CAMPUSES,
        campuses: campuses
        }
    return action
}
export function createCampus(campus){
    const action ={
        type:CREATE_CAMPUS,
        campus: campus 
    }
    return action
}

//THUNKS
export function fetchCampuses(){
    return function thunk(dispatch){
        return axios.get('/api/campuses')
            .then(res=>res.data)
            .then(campuses=>{
                dispatch(getCampuses(campuses))
            })
            .catch(err=>console.log(err.message))
    }
}
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

export default function CampusesReducer(state = [],action){
    if(action.type === GET_CAMPUSES){
        return action.campuses 
    }
    else if(action.type === CREATE_CAMPUS){
        return [...state.campuses,action.campus]
    }
    else{
        return state;
    }

}