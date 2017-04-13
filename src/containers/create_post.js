import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {uploadImage, markDownConsumed, submitNewPost} from '../actions/index';
import {Field, reduxForm, formValueSelector, change} from 'redux-form';
import Textarea from 'react-textarea-autosize';
import {SubmitButton, ReusableCenteredImage} from '../components/reuseable_components'
import NavBar from './nav_bar';

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
const PostImageDiv = styled.label`
    vertical-align: middle;
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
const TextAreaField = styled(Textarea)`
    margin: auto;
    width: 100%;
    line-height: 2rem;
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

const AddImageButton = styled.label`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: lightseagreen;
    background-image: url('../static/plus.png');
    background-repeat: no-repeat;
    background-position: center;
    position:fixed;
    bottom: 35px;
    right: 35px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
    cursor: pointer;
`;
const LabelButton = styled.label`
    border: 1px solid lightseagreen;
    padding: 5px;
    margin: auto;
    align-self: center;
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
                    <Separator>
                        <ReusableCenteredImage src={this.props.postTitleImageURL} />
                    </Separator>
                    <Separator>
                        <LabelButton>
                                <PostImageFileButton type="file" name="postTitleImageURL" onChange={(event)=>this.handleFile(event, true)} {...postTitleImageURL}/>
                                Upload an image for this post
                        </LabelButton>
                    </Separator>
                    <form onSubmit={handleSubmit((values)=> this.props.submitNewPost(values))}>
                        <Separator>
                            <InputFieldLarge component="input" placeholder="Post Title" name="postTitle" {...title} />
                        </Separator>
                        <Separator>
                            <Field component="textarea" name="postContent" {...content} 
                            component={props => <TextAreaField currentValue={{val: props.value}}
                            _onChange={param => props.onChange(param.val)}
                            onChange={(param)=>console.log(param)}
                            placeholder="Enter post content here!" rows={6}/>}/>
                        </Separator>
                        <Separator>
                            <InputFieldLarge component="input" placeholder="Post Tags" name="postTags" {...categories} />
                        </Separator>
                        <Separator>
                            <SubmitButton value="Submit" type="submit">
                                Submit
                            </SubmitButton>
                        </Separator>
                    </form>
                </CreatePostWrapper>
                <AddImageButton>
                    <PostImageFileButton type="file" onChange={(event)=> this.handleFile(event, false)} name="image1"/>
                </AddImageButton>
            </div>
        );
    }
}


CreatePost = reduxForm({
  form: 'newPost',
fields: ['postTitleImageURL','title', 'categories', 'content']}, null, {uploadImage})(CreatePost);
const selector = formValueSelector('newPost');
function mapStateToProps(state){
    return({markDownProps: state.markDownProps, postTitleImageURL: selector(state, 'postTitleImageURL'), postContent: selector(state, 'postContent')})
}
export default connect(mapStateToProps, {uploadImage, markDownConsumed, submitNewPost})(CreatePost);
