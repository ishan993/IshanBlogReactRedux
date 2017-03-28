import { combineReducers } from 'redux';
import postsReducer from './reducer_postList';
import { reducer as formReducer } from 'redux-form';
import displayComponentsReducer from './reducer_display';

const rootReducer = combineReducers({
    posts: postsReducer, 
    displayComps: displayComponentsReducer,
    form: formReducer
});

export default rootReducer;
