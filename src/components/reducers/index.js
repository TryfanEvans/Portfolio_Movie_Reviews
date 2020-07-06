import {combineReducers} from 'redux'
import searchReducer from './searchReducer.js'
import newestReducer from './newestReducer.js'
import listReducer from './listReducer.js'
export default combineReducers({search: searchReducer, newest: newestReducer, list: listReducer})