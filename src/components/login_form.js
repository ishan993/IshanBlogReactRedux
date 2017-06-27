import React, {Component} from 'react';
import styled from 'styled-components';
import {logInUser} from '../actions';
import {Field, reduxForm, formValueSelector, change} from 'redux-form';
import {SubmitButton, LoadingSubmitButton, ErrorDiv} from '../components/reuseable_components';
import {InputFieldLarge} from '../containers/signup_form';

const FullWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    background: white;
    text-align: center;
    padding: 10px;
`;

class LoginForm extends Component{
    
    renderErrorMessage(){
        if(this.props.authErrorMessage){
            return(<ErrorDiv errorMessage={this.props.authErrorMessage}/>);
        }
    }
    render(){
        const {handleSubmit} = this.props;
        const {email, password} = this.props.fields;
        return(
            <FullWrapper>
                <form>
                    <InputFieldLarge component="input" name="email" placeholder="Enter email address" {...email}/>
                    <InputFieldLarge component="input" name="password" type="password" placeholder="Password" {...password}/>
                    {this.renderErrorMessage()}
                    <LoadingSubmitButton onClick={handleSubmit((values)=>{
                        this.props.onClick(values)})}
                        isLoading={this.props.isLoading} value="Submit" type="submit"> 
                        <h4>Submit!</h4>
                    </LoadingSubmitButton>
                </form>
            </FullWrapper>
        );
    }
}
LoginForm = reduxForm({
    form: 'loginForm',
    fields: ['email', 'password']}, null)(LoginForm);
export default LoginForm;    
