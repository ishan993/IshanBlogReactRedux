import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NameAndPictureWrapper = styled.div`
  margin: auto;
  display: flex;
  alignItems: center;
  justifyContent: flex-start;
`;

const ProfileImg = styled.img`
  height: 80px;
  width: 80px;
  borderRadius: 50%;
  padding: 0;
  margin: 0 10px;
  @media only screen and (min-width: 768px) {
    margin: 0 20px;
  }
`;


const UserInfoComponent = props => (
  <NameAndPictureWrapper>
    <ProfileImg src={'http://localhost:8080/static/profilePic.png'} />
    <h2>
      {props.userInfoProps.firstName + ' '+ props.userInfoProps.lastName}
    </h2>
  </NameAndPictureWrapper>
);

UserInfoComponent.propTypes = {
  userInfoProps: PropTypes.object.isRequired,
};

export default UserInfoComponent;
