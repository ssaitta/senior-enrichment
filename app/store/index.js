import { combineReducers, createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

import campuses from './Campuses'
import students from './Students'
import campus from './SingleCampus'
import student from './SingleStudent'
//import updateStudent from './UpdateStudent'



      
  const rootReducer = combineReducers({
    campuses, //, //get all campuses
    students, //get all students
    campus, //get one campus
    student
    //, //get one student
  //  updateStudent //update an existing student
  })
      
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

//export default rootReducer
export default store

//exporting action creators
export * from './Campuses'
export * from './Students'
export * from './SingleStudent'
export * from './SingleCampus'
//export * from './UpdateStudent'
