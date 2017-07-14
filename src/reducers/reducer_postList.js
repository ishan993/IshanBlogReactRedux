import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST } from '../actions/index';

const DEFAULT_STATE = { all: [], post: undefined };

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload };
    case CREATE_POST:
      return { ...state, post: action.payload };
    case FETCH_POST:
      return { ...state, post: action.post };
    case DELETE_POST:
      return { ...state, post: null };
    default:
      return state;
  }
};

