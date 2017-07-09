import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import HeadlinePost from './headline_post';
import Modal from '../../../containers/modal';
import LoginModal from '../../../containers/login_modal';
import {showBlogTab, showResumeTab} from '../../../actions/index';


export const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, .7);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px;
  z-index: 9991;
`; 
const midlineProps = [];
const postListProps = [];
const headlineProps = {
    displayProps: { imgFlex: 3, mobileImgWidthHeight: "250px", maxImgWidthHeight:"350px", 
    imgUrl:"https://images-na.ssl-images-amazon.com/images/I/51R1OY7r4QL.jpg", flex: true},
    textProps: {textFlex: 2, title: "Don't think twice, it's alright",
    content:"When your rooster crows at the break a dawn, look out your window and I'll be gone. You're the reason I'm trav'lin' on. Don't think twice, it's all right"}
}

class HomePage extends Component{

    homePageTabProps = {
        firstTabTitle:"blog",
        secondTabTitle:"resume",
        showFirstTab: this.props.showBlogTab,
        showSecondTab: this.props.showResumeTab
    }

    renderHomePage(){
        if(this.props.resumeVisible){
           return (<ResumeTab />);
        } else{
            return(
                <div>
                    <HeadlinePost headlineProps={headlineProps}/>
                    {MidlinePosts(midlineProps)}
                    {PostList(postListProps)}
                </div>
            )
        }
    }
    showLoginModal(){
        if(this.props.loginModalVisible){
            return(
                <ModalBackdrop onClick={()=>console.log("FucketyFuckFuck")}>
                    <Modal>
                        <LoginModal/>
                    </Modal>
                </ModalBackdrop>)
            }else   
                return;
    }

    render(){
        return(
            <div>
                <div>
                    {this.showLoginModal()}
                    {this.renderHomePage()}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        resumeVisible: state.displayComps.resumeVisible, 
        loginModalVisible: state.displayComps.loginModalVisible,
        loadingScreenVisible: state.displayComps.loadingScreenVisible};
}

export default connect(mapStateToProps, {showBlogTab, showResumeTab})(HomePage);