import store from '../store.js'

export default () => store.dispatch({type: "CLEAR"})