import axios from 'axios'

//ACTION TYPE
const GET_CAMPUS = "GET_CAMPUS"

//ACTION CREATOR
export function getCampus(campus){
    const action = {
        type:GET_CAMPUS,
        campus: campus
    }
    return action
}

//THUNK CREATOR
export function fetchCampusById(campusId){
    return function thunk(dispatch){
        return axios.get(`./api/campuses/${campusId}`)
            .then(res=>res.data)
            .then(foundCampus=>{
                dispatch(getCampus(foundCampus))
            })
            .catch(err=>console.log(err.message))
    }
}

//REDUCER
export default function SingleCampusReducer(state = {},action){
    if(action.type===GET_CAMPUS){
        return action.campus
    }
    else{
        return state
    }
}