import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import  {fetchPosts}  from '../actions/index';
import {Link} from 'react-router';

class PostList extends Component {
    componentDidMount(){
        console.log("I mounted!, haha");
        this.props.fetchPosts();
        findDOMNode(this.refs.content).addEventListener('scroll', this.onScroll.bind(this));

    }

    onScroll(e){
        console.log("finally!");
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

            <div className="content">
                <h3> Posts </h3>
            
                <ul ref="content" onScroll={(e)=>console.log("scared you'll forget about me!"+e)}>
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