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
    <ProfileImg src={props.profileImgURL} />
    <h2>
      {props.firstName + ' '+ props.lastName}
    </h2>
  </NameAndPictureWrapper>
);

UserInfoComponent.propTypes = {
  profileImgURL: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default UserInfoComponent;
