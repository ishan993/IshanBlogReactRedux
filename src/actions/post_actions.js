import { change } from 'redux-form';
import request from 'superagent';
import config from '../config';

const ROOT_URL = config.ROOT_URL;
const MARKDOWN_LINK_ADDED = 'MARKDOWN_LINK_ADDED';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_ALL_POSTS = '';

// //////////////////////////////////////
// Actions related to posts
// /////////////////////////////////////

// fetch all posts.
// TODO: Implement pagination
export const getAllPosts = () => {
  const fetchAllPostsRequest = request.get(ROOT_URL + '/posts')
                                      .send();
  return (dispatch) => {
    fetchAllPostsRequest.then((response) => {
      dispatch({ type: FETCH_ALL_POSTS, payload: response.body.result });
    })
    .catch((error) => {
      console.log('FETCH_ALL_POSTS_ERROR' + JSON.stringify(error.message));
    });
  };
};

// Submit newPost form
export const submitNewPost = (values) => {
  const createPost = request.post(ROOT_URL + '/post')
                        .send(values)
                        .set('x-access-token', localStorage.getItem('token'));


  return (dispatch) => {
    return createPost.then((response) => {
      console.log('NEW_POST_CREATED_SUCCESS'+JSON.stringify(response.body.result._id));
      return (response.body.result._id);
    })
    .catch((error) => {
      console.log('NEW_POST_CREATED_ERROR' + JSON.stringify(error));
      return (error);
    });
  };
};

// Fetch new post for ShowPost
export const fetchPostWithId = (id) => {
  const fetch = request.get(`${ROOT_URL}/post/${id}`);

  return (dispatch) => {
    fetch.then((response) => {
      dispatch({ type: FETCH_POST, post: response.body.result });
    })
    .catch(error => (
        console.log('ACTION-->FETCHPOST-->ERROR_RESPONSE' + error)
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
