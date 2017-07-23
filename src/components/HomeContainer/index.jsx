import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TabBar from '../../containers/tab_bar';
import HomePage from './containers/home_page_new';
import ResumeTab from '../../containers/resume_tab';
import Modal from '../base_modal';
import LoginModal from '../Modal';
import { showBlogTab, showResumeTab, getAllPosts } from '../../actions/index';

const HomeWrapper = styled.div`
  width: 100%;
  margin: auto;
  marginTop: 30px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, .7);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px;
  z-index: 9991;
`;

class HomeContainer extends Component {
  homePageTabProps = {
    firstTabTitle: 'blog',
    secondTabTitle: 'resume',
    showFirstTab: this.props.showBlogTab,
    showSecondTab: this.props.showResumeTab,
  };

  componentWillMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <HomeWrapper>
        <TabBar tabProps={this.homePageTabProps} isModalVisible={false}/>
        {this.props.loginModalVisible ?
           <ModalBackdrop>
             <Modal>
               <LoginModal/>
             </Modal>
           </ModalBackdrop> : ''
        }
        {this.props.resumeVisible ?
          <ResumeTab /> :
          <HomePage posts={this.props.posts}/>
        }
      </HomeWrapper>
    );
  }
}

//  TODO: change post reducer name
const mapStateToProps = (state) => ({
  resumeVisible: state.displayComps.resumeVisible,
  loginModalVisible: state.displayComps.loginModalVisible,
  loadingScreenVisible: state.displayComps.loadingScreenVisible,
  posts: state.posts.posts
});

HomeContainer.propTypes = {
  resumeVisible: PropTypes.bool.isRequired,
  loginModalVisible: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  showBlogTab: PropTypes.func.isRequired,
  showResumeTab: PropTypes.func.isRequired,
  getAllPosts: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { showBlogTab, showResumeTab, getAllPosts })(HomeContainer);
