/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { browserHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import { showSearch, updateSearchTerm, showLoginModal, logOutUser, logInUser, checkUserLoggedInAction } from '../actions';
import { FullWidthWrapper, IconImage, FlexItem, DropdownDiv, ArrowDiv, DropdownContent } from '../components/reuseable_components';



const MobileSearchWrapper = styled.div`
    white-space: nowrap; 
    width: 100%;
    padding: 7px;
    z-index: 900;
    position: fixed;
    top: 0;
    border-bottom: .3pt solid lightgrey;
`;

const MobileSearchInput = styled.input`
    width: 55%;
    display: inline-block;
    padding: 5px;
    margin-left: 10px;
    font-size: 1em;
    outline: none;
    border: none;
    border-bottom: 1px solid lightseagreen;
`;

const MobileSearchItem = styled(SearchIcon)`
    float: right;
    vertical-align: middle;
    margin-top: 5px;
    padding: 0;
    margin-left: 5px;
`;




class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = ({ showDropdown: false });
  }

  componentWillMount() {
    this.props.checkUserLoggedInAction();
  }

    displaySearchBar() {
      if (this.props.displayProps.searchEnabled) {
        return (
          <MobileSearchWrapper>
            <form>
              <MobileSearchInput
                name="searchTerm"
                placeholder="Search"
                onChange={this.handleChange.bind(this)}
              />
              <MobileSearchItem
                src="./static/close.png"
                onClick={() => this.props.showSearch(false)}
              />
              <MobileSearchItem
                src="./static/search.png"
                onClick={() => this.handleFormSubmit}
              />
            </form>
          </MobileSearchWrapper>
        );
      }
      return (  
          <SearchAndLoginContainer isLoggedIn={this.props.displayProps.userLoggedIn}>
            {this.renderProfileButton()}
          </SearchAndLoginContainer>
        </NavBarWrapper>
      );
    }
  renderLoginButton() {

    if (this.props.displayProps.userLoggedIn === false){
      return (
        <LabelGrey onClick={() => this.props.showLoginModal(true)}>
          Login
        </LabelGrey>);
    }
    return (
      <TextButtonRight to={'/post/new'}>
        New Post
      </TextButtonRight>
    );
  }

  renderProfileButton() {
    if (this.props.displayProps.userLoggedIn === true){
      return (

      );
    }
  }
    logOutUser(){
        this.props.logOutUser();
        browserHistory.push('/');
    }
    
    handleFormSubmit(event){
        event.preventDefault();
    }
    render(){ 
        return(
            <div>
                {this.displaySearchBar()}   
            </div>
        );
    }
}

NavigationBar.propTypes = {
  checkUserLoggedInAction: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  displayProps: state.displayComps,
  searchForm: state.searchForm,
});



export default connect(mapStatetoProps, {
  showSearch,
  updateSearchTerm,
  showLoginModal,
  logOutUser,
  logInUser,
  checkUserLoggedInAction,
})(NavigationBar);
*/