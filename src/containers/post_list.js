import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {fetchPosts}  from '../actions/index';
import {Link} from 'react-router';

class PostList extends Component {
    componentDidMount(){
        console.log("I mounted!, haha");
        this.props.fetchPosts();
    }

    populateRow(post){
        
            return( 
            <Link to={`posts/${post.id}`}>
                <li>
                    <span>
                     {post.title}
                     </span>
                     <span className="floatItRight">
                     {post.categories}
                     </span>
                </li>
            </Link>
            );
    }
    renderNull(){
        if (this.props.all.length == 0)
            return(
                <h5>No posts to display. Please add a post!</h5>
            );
    }

    render(){

       
        return (

            <div>
                <Link to="posts/new">  
                    <button value="Another one!">Add a new post! </button>
                </Link>
                <h3> Posts </h3>
            
                <ul>
                    {this.props.all.map((post)=>this.populateRow(post))}
                </ul>
                {this.renderNull()}
            </div>
        );
    }
}


function mapStatetoProps(state){
    return {all: state.posts.all};
}

export default connect (mapStatetoProps, {fetchPosts})(PostList);