import React, {Component} from 'react';
import connect from 'react-redux';
import styled from 'styled-components';
import { InputFieldLarge } from '../../CreatePost';

class CreatePostForm extends Component {
  render() {
    return (
      <p>
        Hello!
      </p>
    );
  }
};

export default connect()(CreatePostForm);
