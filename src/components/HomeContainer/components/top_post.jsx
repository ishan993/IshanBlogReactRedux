import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PostTextContainer from './PostTextContainer';

const TopPostWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  @media only screen and (min-width: 768px) {
    display: flex;
    justifyContent: space-between;
    alignContent: middle;
  }
`;

const ImageWrapper = styled(Link)`
  flexBasis: 40%;
  flex-shrink: 0;
`;

const Image = styled.img`
  maxWidth: 90%;
  margin: auto;
`;

const TopPost = (props) => (
  <TopPostWrapper>
    <ImageWrapper to={'/post/' + props.post._id}>
      <Image src={props.post.postTitleImageURL} />
    </ImageWrapper>
    <PostTextContainer
      _id={props.post._id}
      postTitle={props.post.postTitle}
      postDescription={props.post.postDescription}
      postDate={props.post.postDate}
    />
  </TopPostWrapper>
);

TopPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default TopPost;
