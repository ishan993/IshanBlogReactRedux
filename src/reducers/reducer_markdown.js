import { MARKDOWN_ADDED, MARKDOWN_CONSUMED, MARKDOWN_LINK_ADDED } from '../actions/index';

const DEFAULT_STATE = { markDownInQueue: false, markDownURL: '' };


export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case MARKDOWN_ADDED:
      return ({ ...state, markDownInQueue: true, markDownURL: action.payload });
    case MARKDOWN_CONSUMED:
      return ({ ...state, markDownInQueue: false, markDownURL: '' });
    default:
      return state;
  }
};
