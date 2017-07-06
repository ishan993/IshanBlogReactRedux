export const AUTH_ERROR = 'AUTH_ERROR';

export const toggleAuthErrorAction = (props) => {
  if (props.showError) {
    return ({ type: AUTH_ERROR, payload: props.message });
  }
  return ({ type: AUTH_ERROR, payload: null });
};
