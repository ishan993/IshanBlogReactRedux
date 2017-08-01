import request from 'superagent';
import config from '../config';
import { toggleAuthErrorAction, toggleLoadingGraphicAction } from '../actions';

export const UPDATE_USER_LOGGED_IN = 'UPDATE_USER_LOGGED_IN';
export const UPDATE_LOGIN_MODAL_VISIBLE = 'UPDATE_LOGIN_MODAL_VISIBLE';
const ROOT_URL = config.ROOT_URL;
// const ROOT_URL = 'https://ishan-blog-backend.herokuapp.com';

// Show or hide login modal
export const showLoginModal = () => ({
  type: UPDATE_LOGIN_MODAL_VISIBLE,
  payload: true,
});

export const hideLoginModal = () => ({
  type: UPDATE_LOGIN_MODAL_VISIBLE,
  payload: false,
});

export const checkUserLoggedInAction = () => {
  if (localStorage.getItem('token') === null) {
    console.log('USER_LOGGED_IN_FALSE');
    return ({
      type: UPDATE_USER_LOGGED_IN,
      payload: null,
    });
  }
  const tokenValidRequest = request.post(ROOT_URL + '/token')
                                    .send({ token: localStorage.getItem('token') });
  return (dispatch) => {
    tokenValidRequest.then((response) => {
      dispatch({
        type: UPDATE_USER_LOGGED_IN,
        payload: response.body.result,
      });
    })
    .catch(error => {
      console.log('LOGIN_ERROR: ' + error.message);
      dispatch({
        type: UPDATE_USER_LOGGED_IN,
        payload: null,
      });
    });
  };
};

const loginSuccessSequence = (dispatch) => {
  dispatch(toggleAuthErrorAction({
    showError: false,
    message: null,
  }));
  dispatch(toggleLoadingGraphicAction(false));
  dispatch(hideLoginModal());
  dispatch({
    type: UPDATE_USER_LOGGED_IN,
    payload: true,
  });
};

export const signUpUser = (props) => {
  const signUpReq = request.post(ROOT_URL + '/user')
                           .send(props)
                           .set('Content-Type', 'application/json');

  return (dispatch) => {
    dispatch(toggleLoadingGraphicAction(true));
    signUpReq.then((response) => {
      loginSuccessSequence(dispatch);
      localStorage.setItem('token', response.body.data.token);
    })
    .catch((error) => {
      dispatch(toggleLoadingGraphicAction(false));
      dispatch(toggleAuthErrorAction({
        showError: true,
        message: error.response.body.message,
      }));
    });
  };
};

// Log in user
// If 200OK, set the userLoggedIn displayProp to true
export const logInUser = (props) => {
  const loginReq = request.post(ROOT_URL + '/login')
                          .send(props)
                          .set('Content-Type', 'application/json');

  return (dispatch) => {
    dispatch(toggleLoadingGraphicAction(true));
    loginReq.then((response) => {
      localStorage.setItem('token', response.body.result.token);
      loginSuccessSequence(dispatch);
    })
    .catch((error) => {
      console.log('Login error: ' + error);
      dispatch(toggleLoadingGraphicAction(false));
      dispatch(toggleAuthErrorAction({
        showError: true,
        message: error.response.body.message,
      }));
    });
  };
};

export const logOutUser = () => {
  localStorage.setItem('userLoggedIn', false);
  localStorage.removeItem('token');
  return ({
    type: UPDATE_USER_LOGGED_IN,
    payload: false,
  });
};
