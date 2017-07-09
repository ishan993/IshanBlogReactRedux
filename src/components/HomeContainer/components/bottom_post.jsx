import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const H3Link = styled(Link)`
  cursor: pointer;
  fontSize: 1.2rem;
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

const ImageWrapper = styled.div`
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

const BottomPost = (props) => (
  <BottomPostWrapper>
    <ImageWrapper>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/51R1OY7r4QL.jpg" />
    </ImageWrapper>
    <TextWrapper>
      <H3Link to={'hello'}>
        Hello World!
      </H3Link>
      <p>
        Post content here!
      </p>
    </TextWrapper>
  </BottomPostWrapper>
);

export default BottomPost;
