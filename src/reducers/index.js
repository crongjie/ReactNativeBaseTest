import test from './test.js';  
import { combineReducers } from 'redux'
//import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    test
    //form: formReducer,
    // Add the reducer to your store on the `routing` key
    //routing: routerReducer
  })