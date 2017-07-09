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
  marginTop: 10px;
  @media only screen and (min-width: 768px) {
    width: 85%;
  }
`;

const MidPostsWrapper = styled.div`
  display: block;
  marginTop: 20px;
  borderTop: 0.3pt solid lightgrey;
  borderBottom: 0.3pt solid lightgrey;
  @media only screen and (min-width: 768px) {
    display: flex;
    justifyContent: space-around;
    alignContent: center;
  }

`;

const headlineProps = {
  displayProps: { imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51R1OY7r4QL.jpg' },
  textProps: { title: "Don't think twice, it's alright",
    content: "When your rooster crows at the break a dawn, look out your window and I'll be gone. You're the reason I'm trav'lin' on. Don't think twice, it's all right" },
};


const HomePage = props => (
  <ContentWrapper>
    <TopPost props={headlineProps} />
    <MidPostsWrapper>
      <MidPost url={'https://s-media-cache-ak0.pinimg.com/originals/5c/91/a0/5c91a0775997aaedec4e68807b806e03.jpg'} />
      <MidPost url={'http://okp-cdn.okayplayer.com/wp-content/uploads/2017/02/john-mayer-wave-two-copy.jpg'} />
      <MidPost url={'http://www.billboard.com/files/styles/article_main_image/public/media/john-mayer-performance-650-430.jpg'} />
    </MidPostsWrapper>
    <BottomPostWrapper>
      <BottomPost props={headlineProps} />
      <BottomPost props={headlineProps} />
      <BottomPost props={headlineProps} />
      <BottomPost props={headlineProps} />
    </BottomPostWrapper>
  </ContentWrapper>
);

export default HomePage;
