import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const ImageWrapper = styled.div`
  flexBasis: 40%;
`;
const TextWrapper = styled.div`
  flexBasis: 50%;
  background: papayawhip;
`;
const Image = styled.img`
  maxWidth: 90%;
  margin: auto;
`;

const TopPost = (props) => (
  <TopPostWrapper>
    <ImageWrapper>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/51R1OY7r4QL.jpg" />
    </ImageWrapper>
    <TextWrapper>
      Hello World!
    </TextWrapper>
  </TopPostWrapper>
);

export default TopPost;
