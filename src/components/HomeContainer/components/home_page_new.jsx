import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TopPost from '../components/top_post';
import MidPost from '../components/mid_post';
import BottomPost from '../components/bottom_post';

const BottomPostWrapper = styled.div`
  margin: auto;
  marginTop: 20px;
`;

const ContentWrapper = styled.div`
  width: 95%;
  margin: auto;
  marginTop: 30px;
  @media only screen and (min-width: 768px) {
    width: 85%;
  }
`;

const MidPostsWrapper = styled.div`
  display: block;
  marginTop: 20px;
  padding: 20px 0;  
  borderTop: 0.3pt solid lightgrey;
  borderBottom: 0.3pt solid lightgrey;
  @media only screen and (min-width: 768px) {
    display: flex;
    justifyContent: space-between;
    alignContent: center;
  }
`;

const HomePage = props => {
  const propPosts = props.posts.slice();
  if (propPosts.length === 0) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  return (
    <ContentWrapper>
      {console.log('The length is: '+ propPosts.length)}
      <TopPost post={propPosts.splice(0, 1)[0]} />
      <MidPostsWrapper>
        <MidPost post={propPosts.splice(0, 1)[0]} />
        <MidPost post={propPosts.splice(0, 1)[0]} />
        <MidPost post={propPosts.splice(0, 1)[0]} />
      </MidPostsWrapper>
      <BottomPostWrapper>
        {propPosts.map(post => (<BottomPost key={post._id} post={post} />))}
      </BottomPostWrapper>
    </ContentWrapper>
  );
};

HomePage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default HomePage;
