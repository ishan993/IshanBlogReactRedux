import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const H1Link = styled(Link)`
  cursor: pointer;
  fontSize: 2rem;
  textDecoration: none;
  fontWeight: 100;
  color: darkGrey;
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
`;
const TextWrapper = styled.div`
  flexBasis: 50%;
  padding: 30px;
`;
const Image = styled.img`
  maxWidth: 90%;
  margin: auto;
`;

const TopPost = (props) => (
  <TopPostWrapper>
    <ImageWrapper to="/post/1499901747564">
      <Image src="https://images-na.ssl-images-amazon.com/images/I/51R1OY7r4QL.jpg" />
    </ImageWrapper>
    <TextWrapper>
      <H1Link to="/post/1499901747564">
        What is React? How does it work?
      </H1Link>
      <p>
        Content content
      </p>
    </TextWrapper>
  </TopPostWrapper>
);

export default TopPost;
