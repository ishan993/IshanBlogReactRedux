import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PostAuthorContainer from './PostAuthorContainer';

const H2Link = styled(Link)`
  padding: 10px 0;
  cursor: pointer;
  fontSize: 1.5rem;
  textDecoration: none;
  fontWeight: 100;
  color: darkGrey;
`;

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

const TextContainer = styled.div`
  flexBasis: 60%;
  @media only screen and (min-width: 768px) {
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
    <TextContainer>
      <H2Link to={'/post/' + props.post._id}>
        {props.post.postTitle}
      </H2Link>
      <p>
        {props.post.postDescription}
      </p>
      <PostAuthorContainer
        postAuthorImage="http://localhost:8080/static/profilePic.png"
        postAuthorName="Ishan Vadwala"
        postDate={props.post.postDate}
      />
    </TextContainer>
  </MidPostWrapper>
);

MidPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default MidPost;
