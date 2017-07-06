import { AUTH_ERROR } from '../actions';

const DEFAULT_STATE = { authErrorMessage: null };

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, authErrorMessage: action.payload };
    default:
      return state;
  }
};
