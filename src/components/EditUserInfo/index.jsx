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
  boxSizing: border-box;
  fontSize: 1rem;
  width: 80%;
  margin: 10px auto;
  outline: none;
  padding: 10px;
  border: 0;
  color: grey;
  border: none;
  borderBottom: 0.3pt solid lightseagreen;
  fontSize: 200;
`;

const StyledFieldLarge = styled(StyledField)`
  width: 100%;
  flex: 3;
`;

const IconImage = styled.img`
  borderRadius: 50%;
  height: 120px;
  width: 120px;
  padding: 10px;
  flex: 1;
`;

const FileInput = styled.input`
  display: none;
`;

const Label = styled.label`
  display: inline-block;
  cursor: pointer;
  margin: 0;
  padding: 0;
  outline: none;
`;
const RowWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  alignItems: center;
  justifyContent: center;
`;

const ImgRowWrapper = styled(RowWrapper)`
  justifyContent: space-between;
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
        <ImgRowWrapper>
          <Label>
            {this.props.initialValues !== null && this.props.initialValues.authorImgURL !== undefined ?
              this.setState({ imgURL: this.props.initialValues.authorImgURL }) : ''
            }
            <IconImage
              src={this.state.imgURL}
            />
            <FileInput type="file" />
          </Label>
          <div>
            <StyledFieldLarge name="firstName" component="input" placeholder="First Name" />
            <StyledFieldLarge name="lastName" component="input" placeholder="Second Name" />
          </div>
        </ImgRowWrapper>
        <Form>
          <StyledField name="authorImgUrl" component="input" value={this.state.imgURL} hidden />
          <StyledField
            name="userDescription"
            component="textarea"
            placeholder="Enter a description"
          />
          <StyledField name="github" component="input" placeholder="Enter your Github URL" />
          <StyledField name="linkedIn" component="input" placeholder="Enter your LinkedIn URL" />
          <RowWrapper>
            <SubmitButton
              type="submit"
              onClick={
              (event) => {
                event.preventDefault();
                console.log('tried to submit!');
              }}
            >
              Submit
            </SubmitButton>
          </RowWrapper>
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
