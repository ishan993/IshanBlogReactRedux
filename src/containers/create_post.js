import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {uploadImage} from '../actions/index';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import Textarea from 'react-textarea-autosize';
import {SubmitButton} from '../components/reuseable_components'

const CreatePostWrapper = styled.div`
    padding: 40px;
    width: 80%;
    margin: auto;
`;
const SeparatorDiv = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    &:last-of-type{
        display: flex;
    }
`;
const PostImageDiv = styled(SeparatorDiv)`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    background: aliceblue;
    height: 200px;
    display:flex;

    &:hover{
        background: lightgrey;
    }
`;
const CenteredTextDiv = styled.div`
    margin: auto;
`; 
const TextAreaField = styled(Textarea)`
    margin: auto;
    width: 100%;
    line-height: 3.5vw;
    rows: 4;
    font-size: 2.5vw;
    color: grey;
    border: none;
    outline:none;
    padding: 3px;;
    border-bottom: .7pt solid lightseagreen;
`;

export const InputFieldLarge = styled.input`
    margin: auto;
    width: 100%;
    line-height: 20px;
    font-size: 18px;
    color: grey;
    padding: 3px;;
    border: none;
    outline: none;
    border-bottom: .7pt solid lightseagreen;
`;

class CreatePost extends Component{
   handleFile(event){
        console.log("handling file: "+this.props.postContent);
        this.props.postContent = "FucketyFuckFuck";
        this.props.uploadImage(event.target.files[0]);
    }
    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;
        const {title, categories, content} = this.props.fields;

        return(
            <CreatePostWrapper>
                <PostImageDiv>
                    <CenteredTextDiv>
                        Select an image for this post!
                    </CenteredTextDiv>
                </PostImageDiv>
                <form onSubmit={handleSubmit(()=>console.log("Tried to handle this form submission!"))}>
                    <SeparatorDiv>
                        <Field component="input" placeholder="Post Title" name="postTitle" {...title} />
                     </SeparatorDiv>
                     <SeparatorDiv>
                        <Field component="textarea" placeholder="Post Tags" name="postTags" {...categories} />
                    </SeparatorDiv>
                    <SeparatorDiv>
                        <Field component="input" placeholder="Enter post content here!" name="postContent"  minRows={3} {...content}/>
                    </SeparatorDiv>
                    <input type="file" onChange={(event)=> this.handleFile(event)} name="image1"/>
                    <SeparatorDiv>
                        <SubmitButton value="Submit" type="submit">
                            Submit
                        </SubmitButton>
                    </SeparatorDiv>
                </form>
            </CreatePostWrapper>

        );
    }
}


CreatePost = reduxForm({
  form: 'newPost',
fields: ['title', 'categories', 'content']}, null, {uploadImage})(CreatePost);
const selector = formValueSelector('newPost');

export default connect( (state) => {
    const postContent = selector(state, 'postContent')
    return {
        postContent
    }}, {uploadImage})(CreatePost);
