import React, {Component} from 'react';
import styled from 'styled-components';
import {showLoginModal} from '../actions/index';
import {connect} from 'react-redux';
import {InputFieldLarge, SubmitButton} from './create_post';
//Style the modal properly, you dumbfuck

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: palevioletred;
    width: 90%;
    height: 80%;
    z-index: 9999;
    @media only screen and (min-width: 768px) {
    width: 35%;
    height: 75%;
    }

`;
const HeaderDiv = styled.div`
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    border-bottom: .3pt solid lightgrey;
    @media only screen and (min-width: 768px) {
        font-size: 1.5vw;
    }
`;
const TitleText = styled.h2`
    flex-basis: 70%;
    padding: 20px;
    unselectable: on;
    user-select: none;

`;

const ImgButton = styled.img`
    order: 3;
    flex-basis: 15%;
    height: auto;
    width: auto;
    max-width:30px;
    max-height: 30px;
    padding: 0;
    border: none;  
`; 
const LogoImg = styled(ImgButton)`
    padding: 10px;
    order: -1 !important;
    max-width: 50px;
    max-height: 50px;

`;

const TabWrapper = styled.div`
    text-align: center;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: .1pt solid lightgrey;
`;
const TabText = styled.h3`
    border-bottom: .3pt solid lightseagreen;
    padding: none;
    padding-top: 15px;
    padding-bottom: 5px;
    flex-basis: 30%;
    cursor: pointer;
    user-select: none;
`;
 
 const NewInputField = styled(InputFieldLarge)`
    margin: auto;
    width: 80%;
    font-size: 5vw;
    margin-top: 20px;
    line-height: 8vw;
    margin-bottom: 20px;
    @media only screen and (min-width: 768px) {
        font-size: 2vw;
        line-height: 3vw;
    }

 `;

const FullWrapper = styled.div`
    width: 100%;
    background: papayawhip;
    text-align: center;
    height: 80%;
`;

const LoginSubmitButton = styled(SubmitButton)`
    unselectable: on;
    padding: 10px;
    font-size: 1em;
    @media only screen and (min-width: 768px) {
        font-size: 1em;
    }
`;


class LoginModal extends Component{

    render(){
        return(
            <ModalContainer>
                <HeaderDiv>
                    <LogoImg src="../static/logoI.png" />
                    <TitleText>Hello World!</TitleText>
                    <ImgButton src="../static/close.png" onClick={()=>{this.props.showLoginModal(false)}}/>
                </HeaderDiv>
                <TabWrapper>
                    <TabText>Login</TabText>
                    <TabText>Sign up</TabText>
                </TabWrapper>
                <FullWrapper>
                        <NewInputField placeholder="Username"/>
                        <NewInputField type="password" placeholder="Password"/>
                        <LoginSubmitButton onClick={()=>{console.log("Trying to log in")}}> 
                           <h3>Submit!</h3>
                        </LoginSubmitButton>
                </FullWrapper>
            </ModalContainer>
        );
    }
}

export default connect(null, {showLoginModal})(LoginModal);
