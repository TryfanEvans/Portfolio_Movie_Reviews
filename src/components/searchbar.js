import React, { Component } from 'react'
import {connect} from 'react-redux'
import searchActions from './actions/search.js'

class Searchbar extends Component {

    state = {query: ''}
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
       searchActions(this.state.query);
    }


    render() {
        console.log(this.props.search)
        return (
            <form className = 'Searchbar' onSubmit = {this.onSubmit}>
               <input type = 'text' placeholder='search' name = 'query' value = {this.state.query} onChange = {this.onChange}/>

            </form >
        )
    }
}
const mapStateToProps = state => ({ search: state.search });
export default connect(mapStateToProps, {searchActions})(Searchbar)