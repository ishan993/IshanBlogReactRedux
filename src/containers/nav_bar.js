import React, {Component} from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';
import {showSearch, updateSearchTerm, showLoginModal} from '../actions/index';
import {FullWidthWrapper, IconImage, FlexItem} from '../components/reuseable_components';
import {connect} from 'react-redux';


const NavBarWrapper = styled(FullWidthWrapper)`
    position: fixed;
    top: 0;
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
    flex-basis: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TitleItem = styled(FlexItem)`
    padding-left: 5px;
    font-family: title-font;
    text-align: left;
`;
const SearchBarItem = styled(FlexItem)`
    flex-basis: 40%;
    order: 4;
    padding-left: 10px;
    order: 2;

`;
const TextButtonRight = styled(Link)`
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
const ProfilePicIcon = styled(IconImage)`
    margin-right: 15px;
    flex-basis: 20%;
    order: 3;
    border-radius: 50%;
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
        width: 40%;
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

class NavigationBar extends Component{
  

    renderLoginButton(){
        console.log("localStorage"+localStorage.getItem("userLoggedIn"));
        if (!this.props.displayComps.userLoggedIn &&
                (!localStorage.getItem("userLoggedIn") || localStorage.getItem("userLoggedIn")==undefined)){
            return( 
                <TextButtonRight onClick={()=> this.props.showLoginModal(true)}> 
                    Login
                </TextButtonRight>);
        }else{
            return(
                <TextButtonRight to={'/post/new'}>
                    New Post
                </TextButtonRight>
                );
        }
        
    }

    handleChange(event){
        this.props.updateSearchTerm(event.target.value);
    }
    handleFormSubmit(event){
        event.preventDefault();
        console.log("Imagine that I'm submitting the form with searchTerm: "+this.props.searchForm.searchTerm);
    }

    displaySearchBar(){
        if(this.props.displayComps.searchEnabled){
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
                        <TitleItem>
                            Ishan's Blog
                        </TitleItem>
                    </TitleAndLogoContainer>
                    <SearchAndLoginContainer>
                        {this.renderLoginButton()}
                        <SearchBarItem>
                        <SearchIcon src="/static/search.png" onClick={()=> this.props.showSearch(true)}/>
                            <form>
                                <InputSearch placeholder="Search" />
                            </form>
                        </SearchBarItem>
                        <ProfilePicIcon src="/static/profilepic.png" />
                    </SearchAndLoginContainer>
                </NavBarWrapper>
            );
        }
    }
  

    render(){ 
        return(
            <div>
                {console.log("Inside render method, navBar")}
                {this.displaySearchBar()}   
            </div>
        );
    }
}

function mapStatetoProps(state){
    return {displayComps: state.displayComps, searchForm: state.searchForm};
}


export default connect(mapStatetoProps, {showSearch, updateSearchTerm, showLoginModal})(NavigationBar);