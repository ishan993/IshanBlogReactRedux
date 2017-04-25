import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import styled from 'styled-components';
import {showSearch, updateSearchTerm, showLoginModal, logOutUser, logInUser, checkUserLoggedInAction} from '../actions';
import {FullWidthWrapper, IconImage, FlexItem, DropdownDiv, ArrowDiv, DropdownContent} from '../components/reuseable_components';
import {connect} from 'react-redux';


const NavBarWrapper = styled(FullWidthWrapper)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 900;
    border-bottom: .3pt solid lightgray;
    align-items: center;
    justify-content: space-between;
`; 
const TitleAndLogoContainer = styled.div`
    flex-basis: 40%;
    font-family: title-font;
    order: -1;
    text-align: left;
    display: flex;
    align-items: center;
`;
const SearchAndLoginContainer = styled.div`
    padding-right: 10px;
    flex-basis: ${props=> props.isLoggedIn ? '35%' : '25%'};
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const TitleLink = styled(Link)`
    font-size: 1.5rem;
    text-decoration: none;
    padding-left: 5px;
    font-family: title-font;
    text-align: left;
    color: grey;
    &:hover{
        color: lightseagreen;
    }
`;
const SearchBarItem = styled(FlexItem)`
    flex-basis: 60%;
    order: 4;
    padding-left: 10px;
    order: 2;

`;
const TextButtonRight = styled(Link)`
    cursor: pointer;
    color: grey;
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-family: title-font;
    text-align: center;
    flex-basis: 40%;
    order: -1;
    font-size: 1rem;
    &:hover:{
        color: lightseagreen;
    }
`;

const InputSearch = styled.input`
    display: none;
    width: 100%;
    @media only screen and (min-width: 768px) {
        display: inline;
        border: none;
        outline: none;
        border-bottom: 1px solid lightseagreen;
        background-image: url('../static/searchicon.png');
        background-repeat: no-repeat;
        background-position: 5px 10px; 
        line-height: 1.5rem;
        padding: 0 0 1px 50px;
        width: 50%;
        margin: 0;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
        font-size: .8rem;
        &:focus{
            width: 65%;
        }
    }   
`;
const SearchIcon = styled.img`
    margin-right: 25px;
    margin-top: 5px;
    padding: 5px;
    text-align: center;
    display: inline;
    height: auto;
    width: auto;
    max-height: 25px;
    max-width: 25px;
    @media only screen and (min-width: 768px){
        display: none;
    }
`;

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
const LabelGrey = styled.label`
    -webkit-user-select: none; 
    user-select: none;
    font-family: title-font;
    font-size: 1rem;
    color: grey;
    font-weight: 200;
    cursor: pointer;
    background: white;
    &:hover{
        color: lightgray;
    }
`;
class NavigationBar extends Component{    
    constructor(props){
        super(props);
        this.state=({showDropdown: false});
        this.props.checkUserLoggedInAction();
    }
    renderLoginButton(){
        if (this.props.displayProps.userLoggedIn === false){
            return( 
                <LabelGrey onClick={()=> this.props.showLoginModal(true)}> 
                    Login
                </LabelGrey>);
        }else{
            return(
                <TextButtonRight to={'/post/new'}>
                    New Post
                </TextButtonRight>
            );
        }
    }
    renderProfileButton(){
        if(this.props.displayProps.userLoggedIn === true){
            return(
                <ProfileContainer> 
                        <IconImage src={'/static/profilePic.png'} onClick={()=>{this.toggleDropdown()}} />
                        <ProfileDropdown showDropdown={this.state.showDropdown}>
                            <NavBarArrowDiv/>
                            <DropdownContent>
                                <LabelGrey onClick={()=>{this.logOutUser();
                                    this.toggleDropdown();}}> Log out</LabelGrey>
                        </DropdownContent>
                        </ProfileDropdown>
            </ProfileContainer>);
        }
    }
    logOutUser(){
        this.props.logOutUser();
        browserHistory.push('/');
    }
    handleChange(event){
        this.props.updateSearchTerm(event.target.value);
    }
    handleFormSubmit(event){
        event.preventDefault();
    }
    toggleDropdown(){
        this.setState({showDropdown: !this.state.showDropdown});
    }
    displaySearchBar(){
        if(this.props.displayProps.searchEnabled){
                return(
                  <MobileSearchWrapper>
                    <form>  
                       <MobileSearchInput name="searchTerm" placeholder="Search" onChange={this.handleChange.bind(this)}/>
                        <MobileSearchItem src="./static/close.png" onClick={()=>this.props.showSearch(false)}/>
                        <MobileSearchItem src="./static/search.png" onClick={this.handleFormSubmit.bind(this)}/>
                    </form>
                  </MobileSearchWrapper>
                );
        }else{
            return(
                <NavBarWrapper onScroll={this.handleScroll}>
                    <TitleAndLogoContainer>
                        <IconImage src="/static/logoI.png"/>
                        <TitleLink to={'/'}>
                            Ishan's Blog
                        </TitleLink>
                    </TitleAndLogoContainer>
                    <SearchAndLoginContainer isLoggedIn={this.props.displayProps.userLoggedIn}>
                        {this.renderLoginButton()}
                        <SearchBarItem>
                        <SearchIcon src="/static/search.png" onClick={()=> this.props.showSearch(true)}/>
                            <form>
                                <InputSearch placeholder="Search" />
                            </form>
                        </SearchBarItem>
                        {this.renderProfileButton()}
                    </SearchAndLoginContainer>
                </NavBarWrapper>
            );
        }
    }
  

    render(){ 
        return(
            <div>
                {this.displaySearchBar()}   
            </div>
        );
    }
}

function mapStatetoProps(state){
    return {displayProps: state.displayComps, searchForm: state.searchForm};
}


export default connect(mapStatetoProps, {showSearch, updateSearchTerm, showLoginModal,
                                         logOutUser, logInUser, checkUserLoggedInAction})(NavigationBar);