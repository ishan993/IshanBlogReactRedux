import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PostTextContainer from './PostTextContainer';

const BottomPostWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  borderBottom: 0.3pt solid lightgrey;
  @media only screen and (min-width: 768px) {
    display: flex;
    justifyContent: space-between;
    alignContent: middle;
  }
`;

const ImageWrapper = styled(Link)`
  flexBasis: 30%;
`;

const Image = styled.img`
  maxHeight: 250px;
  maxWidth: 90%;
  margin: auto;
`;

const BottomPost = props => (
  <BottomPostWrapper>
    <ImageWrapper to={'/post/' + props.post._id}>
      <Image src={props.post.postTitleImageURL} />
    </ImageWrapper>
    <PostTextContainer
      _id={props.post._id}
      postAuthorId={props.post.postAuthorId}
      postTitle={props.post.postTitle}
      postDescription={props.post.postDescription}
      postDate={props.post.postDate}
    />
  </BottomPostWrapper>
);

BottomPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BottomPost;
