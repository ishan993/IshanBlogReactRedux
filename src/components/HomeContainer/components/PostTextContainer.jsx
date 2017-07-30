import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostAuthorContainer from './PostAuthorContainer';

const TextContainerWrapper = styled.div`
  flexBasis: 60%;
  @media only screen and (min-width: 768px) {
    display: flex;
    flexDirection: column;
    justifyContent: space-between;
  }
`;

const H2Link = styled(Link)`
  padding: 10px 0;
  cursor: pointer;
  fontSize: 1.5rem;
  textDecoration: none;
  fontWeight: 100;
  color: darkGrey;
`;

const PostTextContainer = (props) => (
  <TextContainerWrapper>
    <H2Link to={'/post/' + props._id}>
      {props.postTitle}
    </H2Link>
    <p>
      {props.postDescription}
    </p>
    <PostAuthorContainer
      postAuthorImage="http://localhost:8080/static/profilePic.png"
      postAuthorName="Ishan Vadwala"
      postDate={props.postDate}
    />
  </TextContainerWrapper>
);

PostTextContainer.propTypes = {
  _id: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDescription: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
};

export default PostTextContainer;
