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

class TabBar extends Component{
    firstTabOn = true;
    render(){
        return(
            <TabWrapper>
                <TabItem active={this.firstTabOn} onClick={()=>{this.props.tabProps.showFirstTab();
                     this.firstTabOn=true;}} isModalVisible={this.props.isModalVisible}>
                    <h3>{this.props.tabProps.firstTabTitle}</h3>
                </TabItem>
                <TabItem onClick={()=>{this.props.tabProps.showSecondTab() 
                    this.firstTabOn=false;}} active={!this.firstTabOn} isModalVisible={this.props.isModalVisible}>
                    <h3>{this.props.tabProps.secondTabTitle}</h3>
                </TabItem>
            </TabWrapper>
        );
    }
}

function mapStatetoProps(state){
    return{resumeVisible: state.displayComps.resumeVisible};
}
export default connect(mapStatetoProps, {showResumeTab})(TabBar);