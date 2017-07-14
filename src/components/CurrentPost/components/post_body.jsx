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

const img = styled.img`
    margin: auto;
    width: 100%;
    height: 100%;
    maxHeight: 100px;
`;

const MarkDown = styled(ReactMarkdown)`
    font-weight: 50;
`;

export default class PostBody extends Component {
  render() {
    return (
      <CurrentPostWrapper>
        <h1>
          {console.log(JSON.stringify(this.props))}
          {this.props.post.postTitle}
        </h1>
        <FullWidthImage src="https://cdn.filestackcontent.com/cv1AYBjxToCbzBSMy1OO" alt="title" />
        <MarkDown source={this.props.post.postContent} />
      </CurrentPostWrapper>
    );
  }
}

PostBody.propTypes = {
  post: PropTypes.object.isRequired,
};
