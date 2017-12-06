import axios from 'axios'

//ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES'

//ACTION CREATORS
export function getCampuses(campuses){
   const action = {
        type: GET_CAMPUSES
        }
    return assertFunctionTypeAnnotation
}

//THUNKS
export function fetchCampuses(){
    return function thunk(dispatch){
        return axios.get('/api/campuses')
            .then(res=>res.data)
            .then(campuses=>{
                return
                dispatch(getCampuses)
            })
            .catch(err=>console.log(err.message))
    }
}

//REDUCER

export default function CampusesReducer(state = [],action){
    if(action.type === GET_CAMPUSES){
        return Object.assign({},state,[action.campuses]) //if this works come back an turn into spread syntax
    }
    else{
        return state;
    }

}