import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const BoldText = styled.span`
  fontSize: 0.8rem;
  padding: 0 5px;
`;

const PostAuthor = styled.img`
  height: 35px;
  width: 35px;
  borderRadius: 50px;
  margin: 0;
`;

const PostAuthorWrapper = styled.div`
  fontSize: 0.7rem;
  color: grey;
  width: 100%;
  display: flex;
  justifyContent: flex-start;
  alignItems: center;
`;
const PostAuthorContainer = (props) => (
  <PostAuthorWrapper>
    <PostAuthor src={props.postAuthorImage} />
    <BoldText>
      By {' ' + props.postAuthorName}
    </BoldText>
    {props.postDate ?
      moment(props.postDate).format('l') : ' ' +
      moment(1490911605370).format('l')}
  </PostAuthorWrapper>
);

PostAuthorContainer.propTypes = {
  postAuthorImage: PropTypes.string.isRequired,
  postAuthorName: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
};

export default PostAuthorContainer;
