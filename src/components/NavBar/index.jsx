import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LoginButton from './components/login_button';
import LogoAndTitle from './components/logo_title';
import SearchBar from './containers/search_bar';
import ProfileIcon from './containers/profile_icon';

import { FullWidthWrapper } from '../reuseable_components';
import { showSearch, showLoginModal, logOutUser, checkUserLoggedInAction } from '../../actions';

// TODO
// Fix Dropdown Arrow

const NavBarWrapper = styled(FullWidthWrapper)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 900;
    borderBottom: .3pt solid lightgray;
    alignItems: center;
    justifyContent: space-between;
`;

const SearchAndLoginContainer = styled.div`
    paddingRight: 10px;
    flexBasis: ${(props) => props.isLoggedIn ? '55%' : '30%'};
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

class NavBarContainer extends Component {
  componentWillMount() {
    this.props.checkUserLoggedIn();
  }

  render() {
    return (
      <NavBarWrapper>
        <LogoAndTitle />
        <SearchAndLoginContainer>
          <LoginButton
            userLoggedIn={this.props.userLoggedIn}
            showLoginModal={this.props.showLoginModal}
          />
          <SearchBar />
          {
            this.props.userLoggedIn !== null ?
              <ProfileIcon
                logOutUser={this.props.logOutUser}
                userInfo={this.props.userLoggedIn}
              />
            : ''
          }
        </SearchAndLoginContainer>
      </NavBarWrapper>
    );
  }
}

const mapStateToProps = state => ({
  userLoggedIn: state.displayComps.userLoggedIn,
});

NavBarContainer.propTypes = {
  userLoggedIn: PropTypes.object,
  showLoginModal: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
  checkUserLoggedIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  showLoginModal, logOutUser, checkUserLoggedIn: checkUserLoggedInAction,
})(NavBarContainer);
