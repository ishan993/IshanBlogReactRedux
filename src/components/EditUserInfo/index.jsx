import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { fetchUserInfo } from '../../actions';

const Form = styled.form`
  display: flex;
  flexDirection: column;
  fontSize: 1rem;
`;
const StyledField = styled(Field)`
  fontSize: 1rem;
  width: 70%;
  margin: 10px auto;
  padding: 10px;
  border: 0;
  color: grey;
  borderBottom: 0.3pt solid grey;
`;

const IconImage = styled.img`
  borderRadius: 50%;
  height: 120px;
  width: 120px;
  padding: 10px;
`;
const FileInput = styled.input`
  display: none;
`;
const Label = styled.label`
  display: inline-block;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

const blankImgURL = 'http://res.cloudinary.com/ishanvadwala/image/upload/v1501545883/default_user_p6plmj.png';

class EditUserInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { imgURL: blankImgURL };
  }
  componentWillMount() {
    this.props.fetchUserInfo(this.props.routerProps.match.params.id);
  }
  render() {
    return (
      <div>
        <div>
          {console.log('Hitting me2')}
          <Label>
            {this.props.initialValues !== null && this.props.initialValues.authorImgURL !== undefined ?
              this.setState({ imgURL: this.props.initialValues.authorImgURL }) : ''
            }
            <IconImage
              src={this.state.imgURL}
            />
            <FileInput type="file" />
          </Label>
        </div>
        <Form>
          <StyledField name="firstName" component="input" placeholder="First Name" />
          <StyledField name="lastName" component="input" placeholder="Second Name" />
          <StyledField name="email" component="input" readOnly />
          <StyledField name="authorImgUrl" component="input" value={this.state.imgURL} hidden />
          <StyledField
            name="userDescription"
            component="textarea"
            placeholder="Enter a description"
          />
          <StyledField name="github" component="input" placeholder="Enter your Github URL" />
          <StyledField name="linkedIn" component="input" placeholder="Enter your LinkedIn URL" />
        </Form>
      </div>
    );
  }
}

EditUserInfoContainer = reduxForm({
  form: 'userInfoForm',
})(EditUserInfoContainer);

const mapStateToProps = state => ({
  initialValues: state.userProps.userInfoProps,
});

EditUserInfoContainer.propTypes = {
  initialValues: PropTypes.object,
  routerProps: PropTypes.object.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchUserInfo })(EditUserInfoContainer);
