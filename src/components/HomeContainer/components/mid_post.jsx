import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PostTextContainer from './PostTextContainer';

const Image = styled.img`
  margin: auto;
  textAlign: center;
  width: 100%;
  height: 100%;
  maxHeight: 200px;
  maxWidth: 100%;
  padding: 0;
  objectFit: cover;
`;

const MidPostWrapper = styled.div`
  boxSizing: border-box;
  marginTop: 10px;
  marginLeft: 10px;
  @media only screen and (min-width: 768px) {
    flexBasis: 30%;
    display: flex;
    flexDirection: column;
    justifyContent: space-between;
  }
`;

const ImageContainer = styled(Link)`
  flexBasis: 40%;
`;

const MidPost = props => (
  <MidPostWrapper>
    <ImageContainer to={'/post/' + props.post._id}>
      <Image src={props.post.postTitleImageURL} />
    </ImageContainer>
    <PostTextContainer
      _id={props.post._id}
      postAuthorId={props.post.postAuthorId}
      postTitle={props.post.postTitle}
      postDescription={props.post.postDescription}
      postDate={props.post.postDate}
    />
  </MidPostWrapper>
);

MidPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default MidPost;
