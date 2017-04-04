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
`; 

const TitleItem = styled(FlexItem)`
    font-size: 1.5rem;
    padding-left: 5px;
    font-family: title-font;
    text-align: left;
    flex-basis: 40%;
    order: 2;
    flex-shrink: 2;
`;
const SearchBarItem = styled(FlexItem)`
    flex-basic: 40%;
    order: 4;
    padding-left: 10px;
`;
const LoginButtonItem = styled(FlexItem)`
    font-family: title-font;
    text-align: right;
    flex-basis: 10%;
    order: 3;
    font-size: 1rem;
    margin-left: auto;
    padding-left: 10px;
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
        margin-right: 30px;
        margin-top: 10px;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
        font-size: .8rem;

        &:focus{
            width: 70%;
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

    navBarContainer = (
         <NavBarWrapper onScroll={this.handleScroll}>
                        <FlexItem>
                                <IconImage src="/static/logoI.png"/>
                        </FlexItem>
                        <TitleItem>
                           Ishan's Blog
                        </TitleItem>
                        <LoginButtonItem onClick={()=> this.props.showLoginModal(true)}> 
                             Login
                        </LoginButtonItem>
                        <SearchBarItem>
                        <SearchIcon src="/static/search.png" onClick={()=> this.props.showSearch(true)}/>
                            <form>
                                <InputSearch placeholder="Search" />
                            </form>
                        </SearchBarItem>
                </NavBarWrapper>
                );


    componentDidMount(){
        console.log("Component did mount!"+this.props.helloWorld.title);
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
                this.navBarContainer
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
    return {displayComps: state.displayComps, searchForm: state.searchForm};
}


export default connect(mapStatetoProps, {showSearch, updateSearchTerm, showLoginModal})(NavigationBar);