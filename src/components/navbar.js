import React, { Component } from 'react'
import './style.css'
import {useSelector, connect} from 'react-redux'
import rootReducer from './reducers'
import searchActions from './actions/search.js'
import Searchbar from './searchbar.js'
class Navbar extends Component {
    
    render() {
        return (
           
            <div className = 'Navbar'>
                <Searchbar />
            </div>
        )
    }
}
const mapStateToProps = state => ({ search: state.search });
export default connect(mapStateToProps, {searchActions})(Navbar)