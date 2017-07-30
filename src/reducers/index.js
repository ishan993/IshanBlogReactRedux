import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './reducer_postList';
import displayComponentsReducer from './reducer_display';
import searchFormReducer from './reducer_form';
import markDownReducer from './reducer_markdown';
import errorReducer from './redeucer_error';
import userReducer from './reducer_user';

const rootReducer = combineReducers({
  posts: postsReducer,
  displayComps: displayComponentsReducer,
  form: formReducer,
  searchForm: searchFormReducer,
  markDownProps: markDownReducer,
  errorProps: errorReducer,
  userProps: userReducer,
});

export default rootReducer;

// The whole form re-renders everytime you add an image. So
// Check if this.props.AddedURL != null
// Change the URL, convert it to markdown,
// append the value of this.props.AddedURL to the content body.
// fire a function to just remove the AddedURL
// for this, I need what?
