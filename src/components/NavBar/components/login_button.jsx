import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LabelGrey } from '../../reuseable_components';

const TextButtonRight = styled(Link)`
    cursor: pointer;
    color: grey;
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-family: title-font;
    text-align: center;
    flex-basis: 40%;
    order: -1;
    font-size: 1rem;
    &:hover:{
        color: lightseagreen;
    }
`;

const LoginButton = props => (
    props.userLoggedIn ?
      <TextButtonRight to={'/post/new'}>
        New Post
      </TextButtonRight> :
      <LabelGrey onClick={() => { props.showLoginModal(); }}>
        Login
      </LabelGrey>
  );

LoginButton.propTypes = {
  userLoggedIn: PropTypes.bool.isRequired,
  showLoginModal: PropTypes.func.isRequired,
};

export default LoginButton;
