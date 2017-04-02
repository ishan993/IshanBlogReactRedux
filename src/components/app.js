import React, { Component } from 'react';
import NavigationBar from '../containers/nav_bar';
import styled from 'styled-components';
import Modal from '../containers/modal';
import LoginModal from '../containers/login_modal';


const ChildrenWrapper = styled.div`
  margin-top: 37px;
  @media only screen and (min-width: 768px){
        margin-top: 65px;
    }
`;

export default class App extends Component {

  render() {
    return (
      <div className="parent">
        <NavigationBar/>
        <ChildrenWrapper>
          {this.props.children}
        </ChildrenWrapper>
      </div>
    );
  }
}


