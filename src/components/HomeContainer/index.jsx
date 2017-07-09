import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TabBar from '../../containers/tab_bar';
import HomePage from './containers/home_page_new';
import ResumeTab from '../../containers/resume_tab';
import {showBlogTab, showResumeTab} from '../../actions/index';

const HomeWrapper = styled.div`
  width: 100%;
  margin: auto;
  marginTop: 30px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;


class HomeContainer extends Component {
  homePageTabProps = {
    firstTabTitle: 'blog',
    secondTabTitle: 'resume',
    showFirstTab: this.props.showBlogTab,
    showSecondTab: this.props.showResumeTab,
  };

  render() {
    return (
      <HomeWrapper>
        <TabBar tabProps={this.homePageTabProps} isModalVisible={false}/>
        {this.props.resumeVisible ?
          <ResumeTab /> :
          <HomePage />
        }
      </HomeWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  resumeVisible: state.displayComps.resumeVisible,
});

export default connect(mapStateToProps, {showBlogTab, showResumeTab})(HomeContainer);
