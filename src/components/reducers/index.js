import {combineReducers} from 'redux'
import searchReducer from './searchReducer.js'
import newestReducer from './newestReducer.js'
export default combineReducers({search: searchReducer, newest: newestReducer})