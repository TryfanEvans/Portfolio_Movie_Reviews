import React, { Component } from 'react'
import {connect} from 'react-redux'
import newestReview from './actions/newest.js'
import MovieReview from './movieReview.js'
import { Provider, useSelector } from "react-redux";

function SearchResults() {
    const search = useSelector((state) => state.search);
        search.map( review => console.log(review));
        return (
            <div className = 'SearchResults'>
             {search.map( review => 
             <MovieReview title = {review.display_title} summary =  {review.summary_short} image = { review.multimedia ? review.multimedia.src : ''} />
               
             )}
            </div>
        )
    }


const mapStateToProps = state => ({search: state.search });

export default connect(mapStateToProps, {newestReview})(SearchResults)