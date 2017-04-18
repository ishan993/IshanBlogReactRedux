import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import styled from 'styled-components';
import {uploadImage, markDownConsumed, submitNewPost} from '../actions/index';
import {Field, reduxForm, formValueSelector, change} from 'redux-form';
import Textarea from 'react-textarea-autosize';
import {SubmitButton, ReusableCenteredImage, FileInputConcealer} from '../components/reuseable_components'

import NavBar from './nav_bar';
import OptionsBar from './options_bar';

const CreatePostWrapper = styled.div`
    padding: 40px;
    width: 80%;
    margin: auto;
`;
const Separator = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    &:last-of-type{
        display: flex;
    }
`;

const CenteredTextDiv = styled.div`
    margin: auto;
`; 

const TextAreaField = styled(Field)`
    resize: both;
    margin: auto;
    width: 100%;
    line-height: 1.5rem;
    rows: 5;
    font-weight: 300;
    font-size: 1.1rem;
    color: grey;
    border: none;
    outline:none;
    padding: 3px;;
    border-bottom: .7pt solid lightseagreen;
`;

export const InputFieldLarge = styled(Field)`
    font-weight: 300;
    margin: auto;
    width: 100%;
    line-height: 2rem;
    font-size: 1.5rem;
    color: grey;
    padding: 3px;;
    border: none;
    outline: none;
    border-bottom: .7pt solid lightseagreen;
`;
const LabelButton = styled.label`
    margin: auto;
    align-self: center;
    display: flex;
    align-items: center;
    padding-right: 10px;
    font-size: .8rem;
    background: lightseagreen;
    border-radius: 5px;
    color: white;
    &:hover{
        cursor: pointer;
        
    }
`;


class CreatePost extends Component{
  
    constructor(props){
        super(props);
        console.log("Calling this: "+this.props.userLoggedIn);
        if(!this.props.userLoggedIn)
            browserHistory.push('/');
    }
    handleFile(event, bool){
        this.props.uploadImage({ file: event.target.files[0], isPostTitleImage: bool,
             content: this.props.postContent});
    }

    
    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;
        const {postTitleImageURL, title, categories, content} = this.props.fields;
        return(
            <div>
                <NavBar />
                <CreatePostWrapper>
                    <Separator>
                        <ReusableCenteredImage src={this.props.postTitleImageURL} />
                    </Separator>
                    <Separator>
                        <LabelButton>
                            <img src="/static/cloud-upload.png" />
                            <FileInputConcealer type="file" name="postTitleImageURL" onChange={(event)=>this.handleFile(event, true)} {...postTitleImageURL}/>
                            Upload an image for this post    
                        </LabelButton>
                    </Separator>
                    <Separator>
                       <OptionsBar content={this.props.postContent}/>
                    </Separator>
                    <form onSubmit={handleSubmit((values)=> this.props.submitNewPost(values))}>
                        <Separator>
                            <InputFieldLarge component="input" placeholder="Post Title" name="postTitle" {...title} />
                        </Separator>
                        <Separator>
                            <InputFieldLarge component="input" placeholder="Post Tags" name="postTags" {...categories} />
                        </Separator>
                        <Separator>
                            <TextAreaField rows="9" component="textarea" name="postContent" placeholder={"Enter content here"} {...content}/>
                        </Separator>
                        <Separator>
                            <SubmitButton value="Submit" type="submit">
                                Submit
                            </SubmitButton>
                        </Separator>
                    </form>
                </CreatePostWrapper>
            </div>
        );
    }
}


CreatePost = reduxForm({
  form: 'newPost',
fields: ['postTitleImageURL','title', 'categories', 'content']}, null, {uploadImage})(CreatePost);
const selector = formValueSelector('newPost');
function mapStateToProps(state){
    return({userLoggedIn: state.displayComps.userLoggedIn,markDownProps: state.markDownProps, postTitleImageURL: selector(state, 'postTitleImageURL'), postContent: selector(state, 'postContent')})
}
export default connect(mapStateToProps, {uploadImage, markDownConsumed, submitNewPost})(CreatePost);
