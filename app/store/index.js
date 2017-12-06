/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers, createStore, applyMiddleware } from 'redux'
import campuses from './Campuses'
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
        campuses //, //get all campuses
        //students, //get all students
      })
      
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

//export default rootReducer
export default store

export * from './Campuses'; //not sure if I need this here or if I need it to be in the store file

// export * from Campuses
// export * from Students
// export * from Footer
// export * from Navigation 