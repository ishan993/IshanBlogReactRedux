import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconImage, DropdownContent, LabelGrey, DropdownDiv, ArrowDiv } from '../../reuseable_components';

const ProfileContainer = styled.div`
    align-self: center;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 0px;
    flex-basis: 20%;
    order: 3;
    position: relative;
`;
const ProfileDropdown = styled(DropdownDiv)`
    top: 60px;
    width: 200px;
    right: 30px; 
`;

const NavBarArrowDiv = styled(ArrowDiv)`
    position: relative;
    left: 160px;
`;

const StyledLink = styled(Link)`
  textDecoration: none;
  color: grey;
`;

class ProfileIcon extends Component {
  constructor() {
    super();
    this.state = ({
      showDropdown: false,
    });
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  render() {
    return (
      <ProfileContainer>
        <IconImage src={'/static/profilePic.png'} onClick={() => this.toggleDropdown()} />
        <ProfileDropdown showDropdown={this.state.showDropdown}>
          <NavBarArrowDiv />
          <DropdownContent>
            <StyledLink 
              to={'/edit/' + this.props.userInfo._id}
              onClick={() => this.toggleDropdown()}
            >
              Edit profile
            </StyledLink>
            <LabelGrey onClick={() => {
              this.props.logOutUser();
              this.toggleDropdown();
            }}
            >
              Log out
            </LabelGrey>
          </DropdownContent>
        </ProfileDropdown>
      </ProfileContainer>
    );
  }
}

ProfileIcon.propTypes = {
  userInfo: PropTypes.object.isRequired,
  logOutUser: PropTypes.func.isRequired,
};

export default ProfileIcon;
