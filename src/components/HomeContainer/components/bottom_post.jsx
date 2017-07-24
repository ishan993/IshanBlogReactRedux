import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const H2Link = styled(Link)`
  cursor: pointer;
  fontSize: 1.8rem;
  textDecoration: none;
  fontWeight: 100;
  color: darkGrey;
`;

const BottomPostWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  borderBottom: 0.3pt solid lightgrey;
  @media only screen and (min-width: 768px) {
    display: flex;
    justifyContent: space-around;
    alignContent: middle;
  }
`;

const ImageWrapper = styled(Link)`
  flexBasis: 20%;
`;
const TextWrapper = styled.div`
  flexBasis: 60%;
  padding: 5px;
`;
const Image = styled.img`
  maxHeight: 225px;
  maxWidth: 90%;
  margin: auto;
`;

const BottomPost = props => (
  <BottomPostWrapper>
    <ImageWrapper to={'/post/' + props.post._id}>
      <Image src={props.post.postTitleImageURL} />
    </ImageWrapper>
    <TextWrapper>
      <H2Link to={'/post/' + props.post._id}>
        {props.post.postTitle}
      </H2Link>
      <p>
        {props.post.postDescription}
      </p>
    </TextWrapper>
  </BottomPostWrapper>
);

BottomPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BottomPost;
