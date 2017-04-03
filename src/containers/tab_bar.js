import React, {Component} from 'react';
import styled from 'styled-components';
import {showResume} from '../actions/index';
import {connect} from 'react-redux';
import {TabWrapper, TabItem} from '../components/reuseable_components';


class TabBar extends Component{

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