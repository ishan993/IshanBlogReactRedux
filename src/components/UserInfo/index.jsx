import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchUserInfo } from '../../actions';

const UserInfoWrapper = styled.div`
  width: 80%;
  background: papayawhip;
`;

class UserInfo extends Component {
  componentWillMount() {
    this.props.fetchUserInfo(this.props.routerProps.match.params.id);
  }

  render() {
    return (
      <UserInfoWrapper>
        Hello World!
      </UserInfoWrapper>
    );
  }
}

UserInfo.propTypes = {
  routerProps: PropTypes.object.isRequired,
};

export default connect(null, { fetchUserInfo })(UserInfo);
