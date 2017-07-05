import React from 'react';
import styled from 'styled-components';
import { Link, browserHistory } from 'react-router';

// ///////////////////////////////////////
// Used for building blog post containers
// //////////////////////////////////////
export const ReusableCardImg = styled.img`
    cursor: pointer;
    flex: ${props => props.displayProps.imgFlex};
    margin: auto;
    width: 100%;
    height: 100%;
    padding: 2px;
    max-height: ${props => props.displayProps.mobileImgWidthHeight};
    max-width: ${props => props.displayProps.mobileImgWidthHeight};
    @media only screen and (min-width: 768px) {
        object-fit: cover;
        max-height: ${props => props.displayProps.maxImgWidthHeight};
        max-width: 100%;
    }
`;
const ReusableCardText = styled.div`
    padding-left: 10px;
    flex: ${props => props.textFlex};
    text-align: justify;
    vertical-align: top;
    height: 100%;
    margin:0;
`;
const CardWrapper = styled.div`
    width: 100%;
    text-align: center;
    @media only screen and (min-width: 768px) {
        display: ${(props) => props.displayProps.flex ? 'flex' : 'block'};
        box-sizing: border-box;
        padding: 10px;
    }
`;
const TextLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export function ReuseableCardContainer(props) {
  return (
    <CardWrapper displayProps={props.displayProps}>
      <ReusableCardImg
        displayProps={props.displayProps}
        src={props.displayProps.imgUrl}
        onClick={() => { browserHistory.push('/'); }}
      />
      <ReusableCardText txtProps={props.textProps}>
        <h3>
          <TextLink to={'/'}>
            {props.textProps.title}
          </TextLink>
        </h3>
        <p>
          {props.textProps.content}
        </p>
      </ReusableCardText>
    </CardWrapper>
  );
}
