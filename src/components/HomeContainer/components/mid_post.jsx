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
  flexBasis: 40%;
  padding: 10px;
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
    </TextContainer>
  </MidPostWrapper>
);

MidPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default MidPost;
