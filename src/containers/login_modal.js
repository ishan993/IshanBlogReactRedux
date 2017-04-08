import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {showLoginModal, showLoginTab, showSignUpTab, logInUser} from '../actions/index';
import {InputFieldLarge} from './create_post';
import TabBar from './tab_bar';
import {ModalContainer, SubmitButton} from '../components/reuseable_components';


//Style the modal properly, you dumbfuck

const HeaderDiv = styled.div`
    background: white;
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
    font-size: 1.5rem;
    margin-top: 15px;
    line-height: 2rem;
    margin-bottom: 15px;
    @media only screen and (min-width: 768px) {
        font-size: 1.3rem;
        line-height: 1.5rem;
    }
 `;
const SmallInputField = styled(NewInputField)`
    width: 38%;
    margin-right: 5px;
`;
const FullWrapper = styled.div`
    width: 100%;
    background: white;
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
        showFirstTab: this.props.showLoginTab,
        showSecondTab: this.props.showSignUpTab
    }

    componentWillUnmount(){
        this.props.showLoginTab();
    }
    renderModalBody(){
        if(this.props.loginTabVisible)
            return(
                <FullWrapper>
                        <NewInputField placeholder="Email"/>
                        <NewInputField type="password" placeholder="Password"/>
                        <LoginSubmitButton onClick={()=>{this.props.logInUser()}}> 
                           <h3>Submit!</h3>
                        </LoginSubmitButton>
                </FullWrapper>
            );
        else
            return( 
                <FullWrapper>
                        <SmallInputField placeholder="First Name" />
                        <SmallInputField placeholder="Last Name"/>
                        <NewInputField placeholder="Email"/>
                        <NewInputField type="password" placeholder="Password"/>
                        <NewInputField type="password" placeholder="confirm password"/>

                        <LoginSubmitButton> 
                           <h4>Submit!</h4>
                        </LoginSubmitButton>
                </FullWrapper>
                );
    }

    render(){
        return(
            <ModalContainer>
                <HeaderDiv>
                    <LogoImg src="../static/logoI.png" />
                    <NoMarginH2>Ishan's Blog</NoMarginH2>
                    <ImgButton src="../static/close.png" onClick={()=>{this.props.showLoginModal(false)}}/>
                </HeaderDiv>
                <TabBar isModalVisible={true} tabProps={this.tabProps} />
                  {this.renderModalBody()}
            </ModalContainer>
        );
    }
}

function mapStateToProps(state){
    return ({loginTabVisible: state.displayComps.loginTabVisible});
}

export default connect(mapStateToProps, {showLoginModal, showLoginTab, showSignUpTab, logInUser})(LoginModal);
