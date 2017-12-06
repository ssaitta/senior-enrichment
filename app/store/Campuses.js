import axios from 'axios'

//ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES'

//ACTION CREATORS
export function getCampuses(campuses){
   const action = {
        type: GET_CAMPUSES,
        campuses: campuses
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

//REDUCER

export default function CampusesReducer(state = [],action){
    if(action.type === GET_CAMPUSES){
        return action.campuses 
    }
    else{
        return state;
    }

}