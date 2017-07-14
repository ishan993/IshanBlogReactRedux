import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { uploadImage, markDownConsumed, submitNewPost } from '../../actions';
import { SubmitButton, ReusableCenteredImage, FileInputConcealer } from '../reuseable_components';
import OptionsBar from './containers/options_bar';

const CreatePostWrapper = styled.div`
    padding: 40px;
    width: 80%;
    margin: auto;
`;

const ButtonWrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    &:last-of-type{
        display: flex;
    }
`;

const FullWidthWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const TextAreaField = styled(Field)`
    resize: both;
    margin: auto;
    marginTop: 10px;
    marginBottom: 10px;
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
    marginTop: 10px;
    marginBottom: 10px;
    border-bottom: .7pt solid lightseagreen;
`;

const LabelButton = styled.label`
    margin: auto;
    align-self: center;
    display: flex;
    align-items: center;
    paddingRight: 15px;
    font-size: .9rem;
    fontWeight: 200;
    border-radius: 5px;
    color: darkgrey;
    border: 0.3pt solid lightseagreen;
    borderRadius: 30px;
    &:hover{
        cursor: pointer;
    }
`;

const StyledSubmitButton = styled(SubmitButton)`
  padding: 10px 20px;
  borderRadius: 30px;
`;

class CreatePost extends Component {
  constructor(props) {
    super(props);
    if (!this.props.userLoggedIn) {
      browserHistory.push('/');
    }
  }

  handleFile(event, bool) {
    this.props.uploadImage({
      file: event.target.files[0],
      isPostTitleImage: bool,
      content: this.props.postContent,
    });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { postTitleImageURL, title, categories, content } = this.props.fields;
    return (
      <div>
        <CreatePostWrapper>
          <FullWidthWrapper>
            <ReusableCenteredImage src={this.props.postTitleImageURL} />
          </FullWidthWrapper>
          <ButtonWrapper>
            <LabelButton>
              <img src="/static/cloud-upload.png" alt="upload" />
              <FileInputConcealer
                type="file"
                name="postTitleImageURL"
                onChange={event => this.handleFile(event, true)}
                {...postTitleImageURL}
              />
                Upload an image for this post    
              </LabelButton>
          </ButtonWrapper>
          <OptionsBar content={this.props.postContent}/>
          <form onSubmit={handleSubmit(values => this.props.submitNewPost(values))}>
            <InputFieldLarge
              component="input"
              placeholder="Post Title"
              name="postTitle"
              {...title}
            />
            <InputFieldLarge
              component="input"
              placeholder="Post Tags"
              name="categories"
              {...categories}
            />
            <TextAreaField
              rows="9"
              component="textarea"
              name="postContent"
              placeholder={'Enter content here'}
              {...content}
            />
            <ButtonWrapper>
              <StyledSubmitButton value="Submit" type="submit">
                Submit
              </StyledSubmitButton>
            </ButtonWrapper>
          </form>
        </CreatePostWrapper>
      </div>
    );
  }
}


CreatePost = reduxForm({
  form: 'newPost',
  fields: ['postTitleImageURL', 'title', 'categories', 'content'],
}, null, { uploadImage })(CreatePost);
const selector = formValueSelector('newPost');

const mapStateToProps = state => ({
  userLoggedIn: state.displayComps.userLoggedIn,
  markDownProps: state.markDownProps,
  postTitleImageURL: selector(state, 'postTitleImageURL'),
  postContent: selector(state, 'postContent'),
});

export default connect(mapStateToProps, {
  uploadImage,
  markDownConsumed,
  submitNewPost,
})(CreatePost);
