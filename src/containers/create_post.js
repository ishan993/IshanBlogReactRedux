import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {uploadImage, markDownConsumed, submitNewPost} from '../actions/index';
import {Field, reduxForm, formValueSelector, change} from 'redux-form';
import Textarea from 'react-textarea-autosize';
import {SubmitButton, ReusableCenteredImage, FullWidthWrapper, FlexItem, ArrowDiv, ReusableInputField} from '../components/reuseable_components'
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
/*
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
`;*/
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
const OptionsMenuBar = styled(FullWidthWrapper)`
    width: 100%;
    height: auto;
    display: flex;
    border-top: .3pt solid lightgrey;
    border-bottom: .3pt solid lightgrey;
`;
const ContainerDiv = styled.div`
    flex: 1;
    text-align: center;
    overflow: none;
`;
const OptionsItem = styled(FlexItem)`
    color: grey;
    position: relative;
    padding-right:15px;
    border-bottom: 3px solid white;
    &:hover{
        border-bottom: 3px solid lightseagreen;
    }
`;
const DropDownDiv = styled.div`
    position: absolute;
    top: 50px;
    width: 250px;
    height: auto;
    text-align: center;
    display: ${props=> props.showDropdown ? 'block' : 'none'};
    padding-bottom: 5px;
`;
const DropdownInputField = styled(ReusableInputField)`
    line-height: 1.2rem;
    font-size: .8rem;
    margin: 0;
    padding:5px;
    margin-bottom:4px;
`;
const SmallButton = styled.button`
    font-height: 1.3rem;
    font-size: .8rem;
    color: grey;
    border: .3pt solid lightseagreen;
    display: inline-block;
    background: white;
    margin:2px;
    font-weight: 200;
`;
const DropdownContent = styled.div`
    border: .3pt solid lightgrey;
    padding: 10px;
    background: white;
`;
const InlineLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: .8rem;
`;
class CreatePost extends Component{
    constructor(props){
        super(props);
        this.state={showDropdown: false}
    }
    componentDidMount(){
        console.log("Local state: "+this.state.name);        
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
                            <img src="/static/cloud-upload.png" />
                            <PostImageFileButton type="file" name="postTitleImageURL" onChange={(event)=>this.handleFile(event, true)} {...postTitleImageURL}/>
                            Upload an image for this post    
                        </LabelButton>
                    </Separator>
                    <Separator>
                        <OptionsMenuBar>
                            <OptionsItem>
                                <InlineLabel onClick={()=>{this.setState({showDropdown: !this.state.showDropdown}); console.log("FOCUS!")}}>
                                   <img src="/static/link.png" />
                                   Add a link
                                </InlineLabel>
                                <DropDownDiv showDropdown={this.state.showDropdown}>
                                    <ArrowDiv/>
                                    <DropdownContent>
                                        <DropdownInputField placeholder="Enter URL" />
                                        <DropdownInputField placeholder="Enter Text" />
                                        <SmallButton> Add </SmallButton>
                                        <SmallButton> Cancel </SmallButton>
                                    </DropdownContent>
                                </DropDownDiv>
                            </OptionsItem>
                            <OptionsItem>
                                <InlineLabel>
                                    <img src="/static/file-image.png"/>
                                    <PostImageFileButton type="file" onChange={(event)=> this.handleFile(event, false)} name="image1"/>                                        
                                    Add an image to the post
                                </InlineLabel>  
                            </OptionsItem>
                             <OptionsItem>
                                    <img src="/static/format-bold.png"/>
                            </OptionsItem>
                            <OptionsItem>
                                    <img src="/static/format-italic.png"/>
                            </OptionsItem>
                            <OptionsItem>
                                    <img src="/static/code-braces.png"/>
                            </OptionsItem>
                        </OptionsMenuBar>
                    </Separator>
                    <form onSubmit={handleSubmit((values)=> this.props.submitNewPost(values))}>
                        <Separator>
                            <InputFieldLarge component="input" placeholder="Post Title" name="postTitle" {...title} />
                        </Separator>
                        <Separator>
                            <TextAreaField rows="9" component="textarea" name="postContent" placeholder={"Enter content here"} {...content}/>
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
