import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const CurrentPostWrapper = styled.div`
  width: 95%;
  margin:  auto;
  textAlign: justify;
  @media only screen and (min-width: 768px) {
    width: 85%;
  }
`;

const FullWidthImage = styled.img`
  padding: 0;
  width: 100%;
  maxHeight: 350px;
  objectFit: cover;
  background: papayawhip;
  marginTop: 10px;
  marginBottom: 20px;
`;

const MarkDown = styled(ReactMarkdown)`
    font-weight: 50;
`;

export default class PostBody extends Component {
  render() {
    return (
      <CurrentPostWrapper>
        <h1>
          {this.props.post.postTitle}
        </h1>
        <FullWidthImage
          src={this.props.post.postTitleImageURL}
          alt="title"
          onClick={() => { console.log('Clicked the image1'); }}
        />
        <MarkDown source={this.props.post.postContent} />
      </CurrentPostWrapper>
    );
  }
}

PostBody.propTypes = {
  post: PropTypes.object.isRequired,
};
