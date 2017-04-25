import React, {Component} from 'react';
import {singnUpUser} from '../actions';
import {Field, reduxForm, formValueSelector, change} from 'redux-form';
import styled from 'styled-components';
import {ReusableInputField, SubmitButton, LoadingSubmitButton} from '../components/reuseable_components';

export const InputFieldLarge = styled(Field)`
    font-weight: 300;
    margin: auto;
    width: 80%;
    line-height: 1.5rem;
    font-size: 1.3rem;
    color: grey;
    padding: 8px;
    margin: 8px;
    border: none;
    outline: none;
    border-bottom: .7pt solid lightseagreen;
    &:focus{
        border-bottom: 2px solid lightseagreen;
    }
`;

const SmallInputField = styled(InputFieldLarge)`
    width: 38%;
    margin-right: 5px;
`;


const FullWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    background: white;
    text-align: center;
    padding: 10px;
`;

class SignUpForm extends Component{

    render(){
        const {handleSubmit} = this.props;
        const {firstName, lastName, email, password} = this.props.fields;
        return(
            <FullWrapper>
                <form>
                    <SmallInputField component="input" name="firstName" placeholder="First Name" {...firstName}/>
                    <SmallInputField component="input" name="lastName"placeholder="Last Name" {...lastName}/>
                    <InputFieldLarge component="input" name="email" placeholder="Email" {...email}/>
                    <InputFieldLarge component="input" name="password" type="password" placeholder="Password" {...password}/>
                    <InputFieldLarge component="input" name="confirmPassword" type="password" placeholder="confirm password"/>
                    <LoadingSubmitButton onClick={handleSubmit((values)=>{
                        console.log("trying to submit signup form"+JSON.stringify(values));
                        this.props.onClick(values)})}
                    isLoading={this.props.isLoading} value="Submit" type="submit"> 
                        <h4>Submit!</h4>
                    </LoadingSubmitButton>
                </form>
            </FullWrapper>
        );
    }
}
SignUpForm = reduxForm({
    form: 'signupForm',
    fields: ['firstName','lastName', 'email', 'password']}, null)(SignUpForm);
export default SignUpForm;    
