import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import MarkDown from 'react-markdown';
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
const InputFieldLarge = styled(Field)`
    font-weight: 200;
    margin: auto;
    width: 100%;
    line-height: 2rem;
    font-size: 1.5rem;
    color: grey;
    padding: 3px;;
    outline: none;
    marginTop: 10px;
    marginBottom: 10px;
    border: 0;
    borderBottom: .3pt solid lightseagreen;
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

const StyledMarkDown = styled(MarkDown)`
`;
const StyledSubmitButton = styled(SubmitButton)`
  background: lightseagreen;
  color: white;
  padding: 10px 20px;
  borderRadius: 5px;
`;

const FullWidthWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const LabelButton = styled.label`
    margin: auto;
    align-self: center;
    display: flex;
    align-items: center;
    paddingRight: 15px;
    font-size: .9rem;
    fontWeight: 200;
    border-radius: 30px;
    color: white;
    border: 0.3pt solid lightseagreen;
    borderRadius: 5px;
    background: lightseagreen;
    &:hover{
        cursor: pointer;
    }
`;

class CreatePost extends Component {
  componentWillMount() {
    if (!this.props.userLoggedIn){
      console.log('USER_NOT_LOGGED_IN');
      this.props.routerProps.history.push('/');
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
    const { postTitleImageURL, title, categories, content, postDescription } = this.props.fields;
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
                required
                {...postTitleImageURL}
              />
                
                Upload an image for this post    
              </LabelButton>
          </ButtonWrapper>
          <OptionsBar content={this.props.postContent}/>
          <form onSubmit={handleSubmit((values) => {
            this.props.submitNewPost(values)
              .then((response) => {
                this.props.routerProps.history.push('/post/' + response);
              }).catch((error) => {
                console.log('It worked!!!!' + error.message);
              });
          })}
          >
            <InputFieldLarge
              component="input"
              placeholder="Post Title"
              name="postTitle"
              required
              {...title}
            />
            <InputFieldLarge
              component="input"
              placeholder="Post Tags"
              name="categories"
              required
              {...categories}
            />
            <TextAreaField
              rows="3"
              component="textarea"
              name="postDescription"
              placeholder={'Write up a short description for the post'}
              required
              {...postDescription}
            />
            <TextAreaField
              rows="9"
              component="textarea"
              name="postContent"
              placeholder={'Enter content here'}
              required
              {...content}
            />
            <ButtonWrapper>
              <StyledSubmitButton value="Submit" type="submit">
                Submit
              </StyledSubmitButton>
            </ButtonWrapper>
          </form>
          <h2> Preview </h2>
          {this.props.postContent ?
            <StyledMarkDown source={this.props.postContent} /> :
        ''}
        </CreatePostWrapper>
      </div>
    );
  }
}


CreatePost = reduxForm({
  form: 'newPost',
  fields: ['postTitleImageURL', 'title', 'categories', 'content', 'postDescription'],
}, null, { uploadImage })(CreatePost);
const selector = formValueSelector('newPost');

const mapStateToProps = state => ({
  userLoggedIn: state.displayComps.userLoggedIn,
  postTitleImageURL: selector(state, 'postTitleImageURL'),
  postContent: selector(state, 'postContent'),
});

CreatePost.propTypes = {
  userLoggedIn: PropTypes.bool.isRequired,
  postTitleImageURL: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  routerProps: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  submitNewPost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  uploadImage,
  markDownConsumed,
  submitNewPost,
})(CreatePost);
