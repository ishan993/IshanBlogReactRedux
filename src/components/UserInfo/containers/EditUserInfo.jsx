import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';

const RowWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justifyContent: flex-start;
  alignItems: center;
`;

const StyledField = styled(Field)`
  boxSizing: border-box;
  fontSize: 1rem;
  width: 100%;
  margin: 10px auto;
  outline: none;
  padding: 5px;
  border: 0;
  color: grey;
  border: none;
  borderBottom: 0.3pt solid lightseagreen;
  fontSize: 200;
`;

const ProfileImg = styled.img`
  height: 80px;
  width: 80px;
  borderRadius: 50%;
  padding: 0;
  margin: 0 10px;
  @media only screen and (min-width: 768px) {
    margin: 0 20px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  textAlign: center;
  fontSize: 1.3rem;
  fontWeight: 100;
  padding: 10px;
  background: lightseagreen;
  color: white;
  border: 0;
  &:hover {
    background: white;
    border: 2px solid lightgrey;
    color: lightseagreen;
  }
`;


class EditUserInfo extends Component {
  componentWillMount() {
    console.log('I will mount!');
  }

  render() {
    return (
      <form>
        <RowWrapper>
          <ProfileImg src={'http://localhost:8080/static/profilePic.png'} />
          <div>
            <StyledField name="firstName" component="input" placeholder="First Name" />
            <StyledField name="lastName" component="input" placeholder="Last Name" />
          </div>
        </RowWrapper>
        <StyledField name="authorImgUrl" component="input" hidden />
        <StyledField
          name="userDescription"
          component="textarea"
          placeholder="Enter a description"
        />
        <StyledField name="github" component="input" placeholder="Enter your Github URL" />
        <StyledField name="linkedIn" component="input" placeholder="Enter your LinkedIn URL" />
        <SubmitButton
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            console.log('clicked button!');
          }}
        >
          Submit
        </SubmitButton>
      </form>
    );
  }
}

EditUserInfo = reduxForm({
  form: 'userInfoForm',
})(EditUserInfo);

export default EditUserInfo;
