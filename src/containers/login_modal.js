import React, {Component} from 'react';
import styled from 'styled-components';
import {showLoginModal} from '../actions/index';
import {connect} from 'react-redux';

//Style the modal properly, you dumbfuck

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: palevioletred;
    width: 90%;
    height: 90%;
    z-index: 9999;
    @media only screen and (min-width: 768px) {
    width: 35%;
    height: 75%;
    }

`;
const HeaderDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    background: papayawhip;
    padding: 15px;
    position: relative;
    font-size: 2.5vw;
    @media only screen and (min-width: 768px) {
        font-size: 1.5vw;
    }
`;
const CloseButton = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    height: auto;
    width: auto;
    max-width:30px;
    max-height: 30px;
    padding: 10px;
    border: none;
`; 

class LoginModal extends Component{

    render(){
        return(
            <ModalContainer>
                <HeaderDiv>
                    <h1>Hello World!</h1>
                    <CloseButton src="../static/close.png" onClick={()=>{this.props.showLoginModal(false)}}/>
                </HeaderDiv>
            </ModalContainer>
        );
    }
}

export default connect(null, {showLoginModal})(LoginModal)
