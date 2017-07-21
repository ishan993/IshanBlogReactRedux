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
    <ImageContainer to="/post/1499901747564">
      <Image src={props.url} />
    </ImageContainer>
    <TextContainer>
      <H3Link to="/google.com">
        Fix You
      </H3Link>
      <p>
        please!wrzey
        xtcyvubiln;ilm'k;,ztrxd
        Add more textDecorationWill thtay wficasc if?
      </p>
    </TextContainer>
  </MidPostWrapper>
);

export default MidPost;
