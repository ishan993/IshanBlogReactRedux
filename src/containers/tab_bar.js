import React, {Component} from 'react';
import styled from 'styled-components';
import {showResume} from '../actions/index';
import {connect} from 'react-redux';
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
    cursor: pointer;
    margin: auto;
    font-family: title-font;
    font-size: 1.0em;
    display: inline-block;
    padding: 15px 15px 5px 15px;
    color: darkgrey;

    @media only screen and (min-width: 768px){
        font-size: 1.5em;
        padding: 35px 15px 5px 15px;
    }
    color: ${props => props.active ? 'palevioletred' : 'grey'};
    border-bottom: ${props => props.active ? '2px solid lightseagreen' : '2px solid grey'};

    &:hover{
        color: darkgrey; 
        border-bottom: 2px solid lightseagreen;
    }
`;


class TabBar extends Component{

//Assigning a class name to tab to highlight the active tab
//because you can't have if:else in a JSX tab
    renderTabHeading(obj){
        if(obj.isActiveClassEnabled){
            return(
                <Item active onClick={()=>{this.props.showResume(obj.shouldShowResumeOnClick)}}>
                    <h3>{obj.title}</h3>
                </Item>
            );
        }else{
            return(
            <Item onClick={()=>{this.props.showResume(obj.shouldShowResumeOnClick)}}>
                <h3>{obj.title}</h3>
            </Item>);
        }
    }
    
    render(){
        return(
            <Wrapper>
                <List>
                    {this.renderTabHeading({
                        title: 'blog',
                        isActiveClassEnabled: !this.props.resumeVisible,
                        shouldShowResumeOnClick:false
                    })}
                    {this.renderTabHeading({
                        title: 'resume',
                        isActiveClassEnabled: this.props.resumeVisible,
                        shouldShowResumeOnClick:true
                    })}
                </List>
            </Wrapper>
        );
    }
}

function mapStatetoProps(state){
    return{resumeVisible: state.displayComps.resumeVisible};
}
export default connect(mapStatetoProps, {showResume})(TabBar);