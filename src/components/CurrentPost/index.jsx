import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchPostWithId } from '../../actions/index';
import PostBody from './components/post_body';

class ShowPost extends Component {
  componentWillMount() {
    // Here is where we send a request to fetch current post
    this.props.fetchPostWithId(this.props.routerProps.match.params.id);
  }

  render() {
    return (
      <div>
        {this.props.post ? <PostBody post={this.props.post} /> : 'hello' }
      </div>
    );
  }
}

ShowPost.propTypes = {
  fetchPostWithId: PropTypes.func.isRequired,
  routerProps: PropTypes.object.isRequired,
  post: PropTypes.object,
};

const mapStateToProps = state => ({ post: state.posts.post });

export default connect(mapStateToProps, { fetchPostWithId })(ShowPost);
