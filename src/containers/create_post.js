import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {uploadImage, markDownConsumed} from '../actions/index';
import {Field, reduxForm, formValueSelector, change} from 'redux-form';
import Textarea from 'react-textarea-autosize';
import {SubmitButton} from '../components/reuseable_components'
import NavBar from './nav_bar';

const CreatePostWrapper = styled.div`
    padding: 40px;
    width: 80%;
    margin: auto;
`;
const Separator = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    &:last-of-type{
        display: flex;
    }
`;
const PostImageDiv = styled.label`
    vertcal-align: middle;
    text-align: center;
    cursor: pointer;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    background: aliceblue;
    height: 200px;
    display: flex;
    &:hover{
        background: lightgrey;
    }
`;
const CenteredTextDiv = styled.div`
    margin: auto;
`; 
const PostImageFileButton = styled.input`
    display: none;
`;
const TextAreaField = styled(Field)`
    margin: auto;
    width: 100%;
    line-height: 2rem;
    rows: 5;
    font-size: 1.5rem;
    color: grey;
    border: none;
    outline:none;
    padding: 3px;;
    border-bottom: .7pt solid lightseagreen;
`;

export const InputFieldLarge = styled(Field)`
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

class CreatePost extends Component{

    componentDidMount(){
        console.log("Does it work? "+this.props.markDownInQueue);
    }
    handleFile(event, bool){
        this.props.uploadImage({ file: event.target.files[0], isPostTitleImage: bool, content: this.props.postContent});
    }
    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;
        const {postTitleImageURL, title, categories, content} = this.props.fields;
        return(
            <div>
                <NavBar />
                <CreatePostWrapper>
                    <PostImageDiv>
                        Upload a cover image for this post!
                        <PostImageFileButton type="file" name="postTitleImageURL" onChange={(event)=>this.handleFile(event, true)} {...postTitleImageURL}/>
                    </PostImageDiv>
                    <form onSubmit={handleSubmit((values)=> console.log(JSON.stringify(values)))}>
                        <Separator>
                            <InputFieldLarge component="input" placeholder="Post Title" name="postTitle" {...title} />
                        </Separator>
                        <Separator>
                            <InputFieldLarge component="input" placeholder="Post Tags" name="postTags" {...categories} />
                        </Separator>
                        <Separator>
                            <TextAreaField component="textarea" placeholder="Enter post content here!" name="postContent" {...content}/>
                        </Separator>
                        <input type="file" onChange={(event)=> this.handleFile(event, false)} name="image1"/>
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
    return({markDownProps: state.markDownProps, postContent: selector(state, 'postContent')})
}

export default connect(mapStateToProps, {uploadImage, markDownConsumed})(CreatePost);
