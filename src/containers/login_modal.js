import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {showLoginModal, showLoginTab, showSignUpTab} from '../actions/index';
import {InputFieldLarge} from './create_post';
import TabBar from './tab_bar';
import {ModalContainer, SubmitButton} from '../components/reuseable_components';

//Style the modal properly, you dumbfuck

const HeaderDiv = styled.div`
    background: papayawhip;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    border-bottom: .3pt solid lightgrey;
`;

const NoMarginH2 = styled.h2`
    text-align: center;
    flex-basis: 80%;
    margin: 0;
    padding-top: 10px;
`
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
    tabProps = { 
        firstTabTitle: "Login",
        secondTabTitle: "Sign up",
        showFirstTab: showLoginTab,
        showSecondTab: showSignUpTab
    }

    componentDidMount(){
        console.log("Login Modal props"+JSON.stringify(this.props));
    }
    logThis(){
        console.log("Yellow world!");
    }

    render(){
        return(
            <ModalContainer>
                <HeaderDiv>
                    <LogoImg src="../static/logoI.png" />
                    <NoMarginH2>Ishan's Blog</NoMarginH2>
                    <ImgButton src="../static/close.png" onClick={()=>{this.props.showLoginModal(false)}}/>
                </HeaderDiv>
                    {this.props.showSignUpTab.bind(this)}
                <TabBar tabProps={this.tabProps} isModalVisible={true}/>
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

export default connect(null, {showLoginModal, showLoginTab, showSignUpTab})(LoginModal);
