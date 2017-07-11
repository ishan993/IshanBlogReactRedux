import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import HeadlinePost from './headline_post';
import Modal from '../../../containers/modal';
import LoginModal from '../../../containers/login_modal';
import {showBlogTab, showResumeTab} from '../../../actions/index';

class HomePage extends Component{
    showLoginModal(){
        if(this.props.loginModalVisible){
            return(
                <ModalBackdrop>
                    <Modal>
                        <LoginModal/>
                    </Modal>
                </ModalBackdrop>)
            }else   
                return;
    }

    render() {
        return (
            <div>
                Hello!
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        resumeVisible: state.displayComps.resumeVisible, 
        };
}

export default connect(mapStateToProps, {showBlogTab, showResumeTab})(HomePage);