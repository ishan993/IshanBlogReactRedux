import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { fetchPostWithId } from '../../actions/index';

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

class ShowPost extends Component {
  constructor(props) {
    super(props);
    console.log('I got these props!' + JSON.stringify(props.routerProps.match.params.id));
  }

  componentWillMount() {
    // console.log('ShowPost Component did mount!' + this.props.params.id);
    // Here is where we send a request to fetch current post
    // this.props.fetchPostWithId(this.props.params.id);
  }

  renderPost() {
    if (this.props.post) {
      return (
        <div>
          <h2>{this.props.post.postTitle}</h2>
          <image src={this.props.post.postTitleImageURL} />
          <MarkDown source={this.props.post.postContent} />
        </div>
      );
    }
    return ('Loading...');
  }
  render() {
    return (
      <CurrentPostWrapper>
        <h1>
          Some witty React related pun here!
        </h1>
        <FullWidthImage src="https://cdn.filestackcontent.com/cv1AYBjxToCbzBSMy1OO" alt="title" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </CurrentPostWrapper>
    );
  }
}

const mapStateToProps = state => ({ post: state.posts.post });

export default connect(mapStateToProps, { fetchPostWithId })(ShowPost);
