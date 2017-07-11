import { change } from 'redux-form';
import request from 'superagent';
import config from '../config';

const ROOT_URL = config.ROOT_URL_REMOTE;
const MARKDOWN_LINK_ADDED = 'MARKDOWN_LINK_ADDED';

// //////////////////////////////////////
// Actions related to posts
// /////////////////////////////////////

// Submit newPost form
export const submitNewPost = (values) => {
  const submit = request.post(ROOT_URL + '/createpost')
                        .send(values);
  return (dispatch) => {
    submit.then((response) => {
      console.log('I got my response here:' + JSON.stringify(response));
    })
    .catch(error => {
      console.log('ERROR_ACTIONS_SUBMIT_NEW_POST' + JSON.stringify(error));
    });
  };
};

// Fetch new post for ShowPost
export const fetchPostWithId = (id) => {
  const fetch = request.get(`${ROOT_URL}/fetchpost/${id}`);

  return (dispatch) => {
    fetch.then((response) => {
      console.log('ACTION-->FETCHPOST-->SUCCESS_RESPONSE' + JSON.parse(response.text).postTitle);
      dispatch({ type: `FETCH_POST`, payload: JSON.parse(response.text) });
    })
    .catch(error => (
        console.log('ACTION-->FETCHPOST-->ERROR_RESPONSE' + JSON.stringify(error))
    ));
  };
};

// Add a link to content
export const addMarkdownLink = (props) => {
  console.log('ACTIONS-->' + MARKDOWN_LINK_ADDED);
  return (dispatch) => {
    dispatch(change('newPost', 'postContent', props.content
        + ' ' + '[' + props.markdownText + '](//' + props.markdownURL + ')'));
  };
};

// Add markdown for Bold, Italic & code
export const addMarkdownFormatting = (props) => {
  let formattingString = '';
  switch (props.formatting) {
    case 'BOLD':
      formattingString = '**';
      return (dispatch) => {
        dispatch(change('newPost', 'postContent', props.content + ' ' + formattingString));
      };
    case 'CODE':
      formattingString = '```';
      return (dispatch) => {
        dispatch(change('newPost', 'postContent', props.content + '\n' + formattingString));
      };
    case 'ITALIC':
      formattingString = '*';
      return (dispatch) => {
        dispatch(change('newPost', 'postContent', props.content + ' ' + formattingString));
      };
    default:
      break;
  }
};
