import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Field, reduxForm, formValueSelector, change} from 'redux-form';
import {showLoginModal, showLoginTab, showSignUpTab, logInUser, signUpUser} from '../actions/index';
import {InputFieldLarge} from './create_post';
import TabBar from './tab_bar';
import {ModalContainer, ReusableInputField, LoadingSubmitButton} from '../components/reuseable_components';
import SignupForm from './signup_form';
import LoadingScreen from '../components/loading_screen';



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
    font-weight: 200;
    color:grey;
    font-family: title-font;
    text-align: center;
    flex-basis: 60%;
    margin: 0;
    padding-top: 10px;
`
const ImgButton = styled.img`
    order: 3;
    flex-basis: 20%;
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
    flex-basis: 20%

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

const FullWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    background: white;
    text-align: center;
    padding: 10px;
`;
const ContentWrapper = styled.div`
    width: 80%;
    margin: auto;
    padding:20px;
`;

class LoginModal extends Component{
    tabProps = { 
        firstTabTitle: "Login",
        secondTabTitle: "Sign up",
        showFirstTab: this.props.showLoginTab,
        showSecondTab: this.props.showSignUpTab
    }
    renderLoadingAnimation(){
        if(this.props.loadingScreenVisible)
            return (<LoadingScreen />);
        else 
            return;
    }
    componentWillUnmount(){
        this.props.showLoginTab();
    }
    renderModalBody(){
        if(this.props.loadingScreenVisible)
            this.renderLoadingAnimation();
        else{
            if(this.props.loginTabVisible)
                return(
                    <FullWrapper>
                        <ReusableInputField placeholder="Email"/>
                        <ReusableInputField type="password" placeholder="Password"/>
                        <LoadingSubmitButton onClick={this.props.logInUser}  isLoading={this.props.isLoading} /> 
                    </FullWrapper>
                );
            else
                return(<SignupForm onClick={this.props.signUpUser} isLoading={this.props.isLoading}/>);
        }
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
    return({
        loginTabVisible: state.displayComps.loginTabVisible,
        isLoading: state.displayComps.isLoading
    });
}

export default connect(mapStateToProps, {showLoginModal, showLoginTab,
                signUpUser, showSignUpTab, logInUser})(LoginModal);
