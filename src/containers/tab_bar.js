import React, {Component} from 'react';
import styled from 'styled-components';
import {showResumeTab} from '../actions/index';
import {connect} from 'react-redux';
import {FlexItem} from '../components/reuseable_components';

const TabWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-items: center;
    justify-content: center;
    padding-top: 10px;
    border-bottom: .3pt solid lightgrey;
`;

const TabItem = styled(FlexItem)`
    padding-left: 10px;
    padding-top: 5px;
    padding-right: 10px;
    ${props => console.log(props.isModalVisible)}
    flex-basis: ${props => props.isModalVisible ? '40%':'5%'};
    cursor: pointer;
    font-family: title-font;
    font-size: 1.5rem;
    color: darkgrey;

    @media only screen and (min-width: 768px){
        font-size: 2rem;
        padding: 0px 10px 5px 10px;
    }
    color: ${props => props.active ? 'palevioletred' : 'grey'};
    border-bottom: ${props => props.active ? '2px solid lightseagreen' : '2px solid grey'};

    &:hover{
        color: darkgrey; 
        border-bottom: 2px solid lightseagreen;
    }
`;

var firstTabOn = true;
export default function TabBar(props){
        return(
            <TabWrapper>
                <TabItem active={firstTabOn} onClick={()=>{props.tabProps.showFirstTab();
                     firstTabOn=true;}} isModalVisible={props.isModalVisible}>
                    <h3>{props.tabProps.firstTabTitle}</h3>
                </TabItem>
                <TabItem onClick={()=>{props.tabProps.showSecondTab() 
                    firstTabOn=false;}} active={!firstTabOn} isModalVisible={props.isModalVisible}>
                    <h3>{props.tabProps.secondTabTitle}</h3>
                </TabItem>
            </TabWrapper>
        );
}
