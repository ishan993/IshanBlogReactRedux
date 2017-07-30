import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserInfoComponent from './components/UserInfoComponent';
import PostItem from '../HomeContainer/components/bottom_post';
import { fetchUserInfo } from '../../actions';

const UserInfoWrapper = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;

const UserPostWrapper = styled.div`
  borderTop: 0.3pt solid lightgrey;
  marginTop: 20px;
  padding: 10px 0;
`;

const UserDescriptionWrapper = styled.div`
  background: aliceblue;
  padding: 20px;
`;

class UserInfo extends Component {
  componentWillMount() {
    this.props.fetchUserInfo(this.props.routerProps.match.params.id);
  }

  render() {
    return (
      <UserInfoWrapper>
        {console.log('I got these props! ' + JSON.stringify(this.props.userPosts))}
        {this.props.userInfoProps === null ?
          'Loading....' :
          <UserInfoComponent
            firstName={this.props.userInfoProps.firstName}
            lastName={this.props.userInfoProps.lastName}
            userDescription={this.props.userInfoProps.userDescription}
            profileImgURL="http://localhost:8080/static/profilePic.png"
          />
        }
        <UserDescriptionWrapper>
          Hello World! How are you? I'm good, thanks for asking!
        </UserDescriptionWrapper>
        <UserPostWrapper>
          {this.props.userPosts.map(post => <PostItem post={post} />)}
        </UserPostWrapper>
      </UserInfoWrapper>
    );
  }
}

UserInfo.propTypes = {
  routerProps: PropTypes.object.isRequired,
  userInfoProps: PropTypes.object,
  userPosts: PropTypes.array,
  fetchUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userInfoProps: state.userProps.userInfoProps,
  userPosts: state.userProps.userPosts,

});
export default connect(mapStateToProps, { fetchUserInfo })(UserInfo);
