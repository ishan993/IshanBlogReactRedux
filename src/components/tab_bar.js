import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: auto;
    width: 100%;
    border-bottom: .3pt solid lightgray;
    white-space: nowrap; 
  
`;

const List = styled.ul`
    text-align: center;
    width: 60%;
    margin: auto;
`;

const Item = styled.li`

    margin: auto;
    font-family: title-font;
    font-size: 1.0em;
    display: inline-block;
    padding: 15px 15px 5px 15px;
    border-bottom: 2px solid grey;  
    color: darkgrey;

@media only screen and (min-width: 768px){
        font-size: 1.5em;
        padding: 35px 15px 5px 15px;

}
  
    &:hover{
        color: grey; 
        border-bottom: 2px solid lightseagreen;
    }
`;

const TabBar = ()=>{

    return(
        <Wrapper>
            <List>
                <Item>
                    <h3>Blog</h3>
                </Item>
                <Item>
                    <h3>Resume</h3>
                </Item>
            </List>
        </Wrapper>
    );
}

export default TabBar;