import React, { Component } from 'react'
import newestReview from './actions/newest.js'
import {connect} from 'react-redux'

class FeaturedMain extends Component {
    componentDidMount() {
      newestReview();
        
    }
    render() {
       
    
      
        return (
            <div className = 'Main'>
                <h1> Hottest New Film </h1>  
                { this.props.newest ? <img src = {this.props.newest.multimedia.src} /> :<div className="fa fa-spinner fa-spin fa-5x" style={{ width: "14rem" }}></div>
                 }
                <h3> {this.props.newest.display_title}</h3> 
                <p> {this.props.newest.summary_short}</p> 
              
                  
              
                 
                
              
            </div>
        )
      
    }
}

const mapStateToProps = state => ({ newest: state.newest });
export default connect( mapStateToProps, {newestReview})(FeaturedMain)
