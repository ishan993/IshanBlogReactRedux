import React, { Component } from 'react';
import styled from 'styled-components';
import { FlexItem } from '../../reuseable_components';

const SearchBarItem = styled(FlexItem)`
  flex-basis: 60%;
  order: 4;
  padding-left: 10px;
  order: 2;
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

class SearchBar extends Component {
  constructor() {
    super();
    this.state = ({ searchTerm: '' });
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <SearchBarItem>
        <SearchIcon src="/static/search.png" onClick={() => this.props.showSearch(true)} />
        <form>
          <InputSearch
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={event => this.handleChange(event)}
          />
        </form>
      </SearchBarItem>
    );
  }
}
export default SearchBar;
