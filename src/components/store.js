import {createStore, compose} from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
var store = createStore(rootReducer, composeWithDevTools( ))
export default store
