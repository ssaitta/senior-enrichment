import { combineReducers, createStore, applyMiddleware } from 'redux'
import campuses from './Campuses'
import students from './Students'
import student from './SingleStudent'
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk


// const initialState = {
  //   campuses:[],
  //   students:[],
  //   newStudentEntry: '',
  //   newCampusEntry:''
  // }
  
  // const rootReducer = function(state = initialState, action) {
    //   switch(action.type) {
      //     default: return state
      //   }
      // };
      
      
      const rootReducer = combineReducers({
        // newStudent, //create a new student
        // newCampus,  //create a new campus
        campuses, //, //get all campuses
        students, //get all students
        student //get one student
      })
      
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

//export default rootReducer
export default store

//exporting action creators
export * from './Campuses'
export * from './Students'
export * from './SingleStudent'
// export * from Students
// export * from Footer
// export * from Navigation 