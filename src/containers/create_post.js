import React, {Component} from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';


const CreatePostWrapper = styled.div`
    padding: 40px;
    width: 80%;
    margin: auto;
`;


const InputField = styled.input`
    margin: auto;
    width: 100%;
    line-height: 3.5vw;
    font-size: 3vw;
    color: grey;
    padding: 3px;;
    border: none;
    outline: none;
    border-bottom: .7pt solid lightseagreen;
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

const SubmitButton = styled.button`
    background: white;
    color: palevioletred;
    border: 1px solid palevioletred;
    font-size: 2vw;
    padding: 5px;
    margin: auto;
    width: 30%;
`;

class CreatePost extends Component{

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
                        <InputField type="text" placeholder="Post Title" name="postTitle" {...title} />
                     </SeparatorDiv>
                     <SeparatorDiv>
                        <InputField type="text" placeholder="Post Tags" {...categories} />
                    </SeparatorDiv>
                    <SeparatorDiv>
                        <TextAreaField placeholder="Enter post content here!" minRows={3} {...content}/>
                    </SeparatorDiv>
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


export default CreatePost = reduxForm({
  form: 'newPost',
  fields: ['title', 'categories', 'content'],
}, null, null)(CreatePost);
