import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class NewPost extends Component{

  
    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;
        const {title, categories, content} = this.props.fields;
        return (
            <div className="flexParent">
                <form onSubmit={handleSubmit(this.props.createPost)}>
                    <div>
                        <label>Post Title</label>
                        <input type="text" placeholder="Post Title" name="postTitle" {...title} />
                     </div>
                     <div>
                       <label>Post Categories</label>
                        <input type="text" placeholder="Post Categories" name="postCategories" {...categories} />
                    </div>
                    <div>
                        <label> Post Content</label>
                        <textarea placeholder="Enter post content here!" name="postContent" {...content}/>
                    </div>
                    <div className="submitButton">
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

NewPost = reduxForm({
  form: 'contact',
  fields: ['title', 'categories', 'content'],
}, null, {createPost})(NewPost);

export default NewPost;