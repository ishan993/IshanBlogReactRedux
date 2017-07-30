import request from 'superagent';
import config from '../config';

const ROOT_URL = config.ROOT_URL;
export const FETCH_USER_INFO = 'FETCH_USER_INFO';

export const fetchUserInfo = (id) => {
  const fetchUserInfoRequest = request.get(ROOT_URL + '/user/' + id);
  console.log('Hitting FETCH_USER_INFO');

  return (dispatch) => {
    fetchUserInfoRequest.then((response) => {
      console.log('FETCH_USER_INFO_SUCCESS: ' + JSON.stringify(response.body));
      dispatch({
        type: FETCH_USER_INFO,
        payload: response.body.result,
      });
    })
    .catch((error) => {
      console.log('FETCH_USER_INFO_ERROR: ' + error.message);
    });
  };
};
