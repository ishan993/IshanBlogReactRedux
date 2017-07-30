import { FETCH_USER_INFO, FETCH_USER_POSTS } from '../actions';

const DEFAULT_STATE = { userInfoProps: null, userPosts: [] };

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return { ...state, userInfoProps: action.payload };
    case FETCH_USER_POSTS:
      return { ...state, userPosts: action.payload };
    default:
      return state;
  }
};
