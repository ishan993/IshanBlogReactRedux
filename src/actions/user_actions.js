import request from 'superagent';
import config from '../config';

const ROOT_URL = config.ROOT_URL;
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const FETCH_USER_POSTS = 'FETCH_USER_POSTS';

export const fetchUserInfo = (id) => {
  const fetchUserInfoRequest = request.get(ROOT_URL + '/user/' + id);

  return (dispatch) => {
    fetchUserInfoRequest.then((response) => {
      console.log('FETCH_USER_INFO_SUCCESS: ' + JSON.stringify(response.body.result.userData));
      dispatch({
        type: FETCH_USER_INFO,
        payload: response.body.result.userData,
      });
      dispatch({
        type: FETCH_USER_POSTS,
        payload: response.body.result.userPosts,
      });
    })
    .catch((error) => {
      console.log('FETCH_USER_INFO_ERROR: ' + error.message);
    });
  };
};
