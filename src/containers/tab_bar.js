import React, {Component} from 'react';
import styled from 'styled-components';
import {showResume} from '../actions/index';
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
    flex-basis: 5%;
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

  

  componentDidMount(){
        console.log("Tab bar props"+JSON.stringify(this.props));
        try{
            this.props.logThis(false);
        }catch(error){
            console.log("error!"+error);
        }
    }

//Assigning a class name to tab to highlight the active tab
//because you can't have if:else in a JSX tab
    renderTabHeading(obj){
        if(obj.isActiveClassEnabled){
            return(
                <TabItem active onClick={()=>{this.props.showResume(obj.shouldShowResumeOnClick)}}>
                    {obj.title}
                </TabItem>
            );
        }else{
            return(
            <TabItem onClick={()=>{this.props.showResume(obj.shouldShowResumeOnClick)}}>
                {obj.title}
            </TabItem>);
        }
    }
    
    render(){
        return(
            <TabWrapper>
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
            </TabWrapper>
        );
    }
}

function mapStatetoProps(state){
    return{resumeVisible: state.displayComps.resumeVisible};
}
export default connect(mapStatetoProps, {showResume})(TabBar);