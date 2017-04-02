import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeadlinePost from './headline_post';
import TabBar from './tab_bar';
import MidlinePosts from './midline_posts';
import PostList from './post_list_new';
import ResumeTab from './resume_tab';
import Modal from './modal';
import LoginModal from './login_modal';
import styled from 'styled-components';


const ModalBackdrop = styled.div`
    background: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 25px;
    z-index: 9991;
`; 

class HomePage extends Component{

    renderHomePage(){
        if(this.props.resumeVisible){
           return (<ResumeTab />);
        } else{
            return(
                <div>
                    <HeadlinePost />
                    <MidlinePosts />
                    <PostList />
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
                <TabBar />
                {this.showLoginModal()}
                {this.renderHomePage()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {resumeVisible: state.displayComps.resumeVisible, 
        loginModalVisible: state.displayComps.loginModalVisible};
}

export default connect(mapStateToProps, null)(HomePage);