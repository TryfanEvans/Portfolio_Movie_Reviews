import React, { Component } from 'react'
import {connect} from 'react-redux'
import getList from './actions/getList.js'
import MovieReview from './movieReview.js'
import not_avaliable from "./not_avaliable.png";

class FeaturedList extends Component {
   componentDidMount() {
         getList(); 
    }
    render() {
        return (
            <div className = 'List'>
                <h1> Critics Picks </h1>
                {this.props.list ?  
                this.props.list.map( review => 
                <MovieReview title = {review.display_title} summary =  {review.summary_short} image = { review.multimedia ? review.multimedia.src : not_avaliable} link = { review.link.url} />) 
                : <div className="fa fa-spinner fa-spin fa-5x" style={{ width: "14rem" }} /> }
            
        
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.list
})

export default connect(mapStateToProps, {getList})(FeaturedList)