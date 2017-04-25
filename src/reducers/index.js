import { combineReducers } from 'redux';
import postsReducer from './reducer_postList';
import { reducer as formReducer } from 'redux-form';
import displayComponentsReducer from './reducer_display';
import searchFormReducer from './reducer_form';
import markDownReducer from './reducer_markdown';
import errorReducer from './redeucer_error';
const rootReducer = combineReducers({
    posts: postsReducer, 
    displayComps: displayComponentsReducer,
    form: formReducer,
    searchForm: searchFormReducer,
    markDownProps: markDownReducer,
    errorProps: errorReducer
});

export default rootReducer;

//The whole form re-renders everytime you add an image. So 
//Check if this.props.AddedURL != null
//Change the URL, convert it to markdown,
//append the value of this.props.AddedURL to the content body.
//fire a function to just remove the AddedURL

//for this, I need what?
