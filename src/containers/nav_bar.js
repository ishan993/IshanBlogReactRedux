import React, {Component} from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';
import {showSearch, updateSearchTerm} from '../actions/index';
import {connect} from 'react-redux';

const NavBarWrapper = styled.ul`
    background: white;
    white-space: nowrap; 
    margin: auto;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 900;
    list-style: none;
    border-bottom: .3pt solid lightgray;

    @media only screen and (min-width: 768px) {
    }
`; 
const Item = styled.li`
    float: none;
    margin: auto;
    display: inline-block;
    vertical-align: middle;
`;
const LastItem = styled(Item)`
    float: right;
`;
const NavBarLink = styled(Link)`

    text-align: center;
    padding: 14px 16px;
    margin-right: 5px;
    font-family: title-font;
    font-size: 1.5em;
    text-decoration: none;
    color: grey;
    &:hover{
        text-decoration: none;
        color: lightgrey;
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
        line-height: 2.3em;
        padding: 0 0 1px 50px;
        width: 40%;
        margin-right: 30px;
        margin-top: 10px;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
        font-size: 1.1em;

        &:focus{
            width: 70%;
        }
    }   
`;


const ImgLogo = styled.img`
    height: auto;
    width: auto;
    max-height: 30px;
    max-width: 50px;
    padding: 2px;
    margin-top: 2px;
    @media only screen and (min-width: 768px) {
        display: inline-block;
        padding: 5px;
        margin-right: 10px;
        max-height: 50px;
        max-width: 100px;
    }
`;
const SearchBox = styled.div`
    background: palevioletred;

    @media only screen and (min-width: 768px) {
        position: absolute;
        width: 100%;
        position: fixed;
        height: 40px;
        top: 0;
        z-index: 1009;
        background: palevioletred;
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

    navBarContainer = ( <NavBarWrapper onScroll={this.handleScroll}>
                        <Item>
                            <NavBarLink to={'/'}>
                                <ImgLogo src="/static/logoI.png"/>
                            </NavBarLink>
                        </Item>
                        <Item>
                            <NavBarLink to={'/'} className="item">
                                Ishan's Blog
                            </NavBarLink>
                        </Item>
                        <LastItem>
                        <SearchIcon src="/static/search.png" onClick={()=> this.props.showSearch(true)}/>
                            <form>
                                <InputSearch placeholder="Search" />
                            </form>
                        </LastItem>
                </NavBarWrapper>);


    componentDidMount(){
        console.log("Component did mount!");
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


export default connect(mapStatetoProps, {showSearch, updateSearchTerm})(NavigationBar);