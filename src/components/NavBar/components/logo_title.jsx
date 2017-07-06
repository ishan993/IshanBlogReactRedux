import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconImage } from '../../reuseable_components';


const TitleAndLogoContainer = styled.div`
  flex-basis: 40%;
  font-family: title-font;
  order: -1;
  text-align: left;
  display: flex;
  align-items: center;
`;

const TitleLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  padding-left: 5px;
  font-family: title-font;
  text-align: left;
  color: grey;
  &:hover{
   color: lightseagreen;
  }
`;

const LogoAndTitle = () => (
  <TitleAndLogoContainer>
    <IconImage src="/static/logoI.png" />
    <TitleLink to={'/'}>
      Ishan's Blog
    </TitleLink>
  </TitleAndLogoContainer>
);

export default LogoAndTitle;
