import {
    UPDATE_WINDOW_SIZE, ENABLE_SEARCH,
    UPDATE_RESUME_VISIBLE, UPDATE_LOGIN_MODAL_VISIBLE,
    UPDATE_LOGIN_TAB_VISIBLE, UPDATE_USER_LOGGED_IN,
    UPDATE_LOADING_GRAPHIC_VISIBLE,
} from '../actions/index';


const DEFAULT_STATE = {
  isMobile: null,
  searchEnabled: false,
  resumeVisible: false,
  loginModalVisible: false,
  loginTabVisible: true,
  userLoggedIn: false,
  isLoading: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_WINDOW_SIZE:
      if (action.payload < 720) {
        return { ...state, isMobile: true };
      }
      return { ...state, isMobile: false };
    case ENABLE_SEARCH:
      return { ...state, searchEnabled: action.payload };
    case UPDATE_RESUME_VISIBLE:
      return { ...state, resumeVisible: action.payload };
    case UPDATE_LOGIN_MODAL_VISIBLE:
      return { ...state, loginModalVisible: action.payload };
    case UPDATE_LOGIN_TAB_VISIBLE:
      return { ...state, loginTabVisible: action.payload };
    case UPDATE_USER_LOGGED_IN:
      return { ...state, userLoggedIn: action.payload };
    case UPDATE_LOADING_GRAPHIC_VISIBLE:
      return { ...state, isLoading: action.payload }
    default:
      return state;
  }
};
