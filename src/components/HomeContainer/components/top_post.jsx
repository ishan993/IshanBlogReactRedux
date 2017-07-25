import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const H1Link = styled(Link)`
  cursor: pointer;
  fontSize: 2rem;
  textDecoration: none;
  fontWeight: 100;
  color: grey;
  &:hover {
    color: darkgrey;
  }
`;

const TopPostWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  @media only screen and (min-width: 768px) {
    display: flex;
    justifyContent: space-around;
    alignContent: middle;
  }
`;

const ImageWrapper = styled(Link)`
  flexBasis: 40%;
  flex-shrink: 0;
`;
const TextWrapper = styled.div`
  flexBasis: 50%;
  padding: 30px;
  flex-shrink: 1;
  @media only screen and (min-width: 768px) {
    display: flex;
    flexDirection: column;
    justifyContent: space-between;
  }
`;
const Image = styled.img`
  maxWidth: 90%;
  margin: auto;
`;

const AuthorAndTimeContainer = styled.div`
  fontSize: 1rem;
  color: grey;
  width: 100%;
`;

const TopPost = (props) => (
  <TopPostWrapper>
    <ImageWrapper to={'/post/' + props.post._id}>
      <Image src={props.post.postTitleImageURL} />
    </ImageWrapper>
    <TextWrapper>
      <H1Link to={'/post/' + props.post._id}>
        {props.post.postTitle}
      </H1Link>
      <p>
        {props.post.postDescription}
      </p>
      <AuthorAndTimeContainer>
        {props.post.postDate ?
          moment.unix(props.post.postDate).format('l') :
          moment(1490911605370).format('l')}
      </AuthorAndTimeContainer>
    </TextWrapper>
  </TopPostWrapper>
);

TopPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default TopPost;
