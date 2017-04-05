import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

 class CurrentPost extends Component{
    componentDidMount(){
        this.props.fetchPost(this.props.params.id);

    }

    callDeletePost(){
      this.props.deletePost(this.props.params.id);
    }

    render(){
        if(!this.props.post){
            return(<div>Loading</div>)
        }
        return(
            <div className="container">
                <button value="Delete post!" onClick={this.callDeletePost.bind(this)}>Delete post! </button>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.content}</p>
            </div>
        );  
    }
}

function mapStateToProps(state){
    return ({post: state.posts.post});
}

export default connect(mapStateToProps, { fetchPost, deletePost })(CurrentPost);