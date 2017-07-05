import axios from 'axios';
import { browserHistory } from 'react-router';
import request from 'superagent';
import { change } from 'redux-form';

export * from './login_actions';
export * from './error_actions';
export * from './display_actions';
export * from './post_actions';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'http://localhost:3000';
const API_KEY = '?key=ishan';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_WINDOW_SIZE = 'UPDATE_WINDOW_SIZE';
export const ENABLE_SEARCH = 'ENABLE_SEARCH';
export const UPDATE_SEARCHTERM = 'UPDATE_SEARCHTERM';
export const UPDATE_RESUME_VISIBLE = 'UPDATE_RESUME_VISIBLE';
export const UPDATE_LOGIN_TAB_VISIBLE = 'UPDATE_LOGIN_TAB_VISIBLE';
export const MARKDOWN_ADDED = 'MARKDOWN_ADDED';
export const MARKDOWN_CONSUMED = 'MARKDOWN_CONSUMED';
export const MARKDOWN_LINK_ADDED = 'MARKDOWN_LINK_ADDED';
export const UPDATE_LOADING_MODAL_VISIBLE = 'UPDATE_LOADING_MODAL_VISIBLE';

export const createPost = (props) => {
  const postReq = axios.post(`${ROOT_URL}posts${API_KEY}`, props);

  return (dispatch) => {
    postReq.then((response) => {
      dispatch({
        type: CREATE_POST,
        payload: response,
      });
      browserHistory.push('/');
    }).catch((error) => {
      console.log('ERROR_FETCHPOSTS' + JSON.stringify(error));
    });
  };
};

export const fetchPost = (id) => {
  const getReq = axios.get(`${ROOT_URL}posts/${id}${API_KEY}`);

  return (dispatch) => {
    getReq.then((response) => {
      console.log('I got this post: ' + response.data);
      dispatch({
        type: FETCH_POST,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log('ERROR_FETCHPOST' + error);
    });
  };
};

export function deletePost(id){
    var request = axios.delete(`${ROOT_URL}posts/${id}${API_KEY}`);

    return function(dispatch){
        request.then((response)=>{
            console.log("I deleted"+response.data.title);
            browserHistory.push('/');
            dispatch({type: "request_complete", payload: null});
        }).catch((error)=>{
            console.log("DELETE_ERROR: "+JSON.stringify(error));
            return false;
        })
    }
}

export function updateWindowSize(windowSize){
    console.log("called UPDATE_WINDOW_SIZE");
    return({
        type: UPDATE_WINDOW_SIZE,
        payload: windowSize
    });
}

export function showSearch(status){
    console.log("Enabling Search: "+status);
    return({
        type: ENABLE_SEARCH,
         payload: status
        });
}

export function updateSearchTerm(term){
    return({
        type: UPDATE_SEARCHTERM,
        payload: term
    })
}
// Functions to show and hide the home page Blog/Resume tab
//Action creators make it less convoluted and more reusable
//Instead of passing bools around.
//Just pass Action creators to do the functions you want.
export function showBlogTab(bool){
    return ({
        type: UPDATE_RESUME_VISIBLE,
        payload: false
    });
}
export function showResumeTab(bool){
    return ({
        type: UPDATE_RESUME_VISIBLE,
        payload: true
    });
}



//Use these to reuse the TabBar component
export function showLoginTab(){
    return({
        type: UPDATE_LOGIN_TAB_VISIBLE,
        payload: true
    });
}
export function showSignUpTab(){
    return ({
        type: UPDATE_LOGIN_TAB_VISIBLE,
        payload: false
    })
}


////////////////////////////////////////////////////////////
//Upload image to backend
//Dispatch action to indicate markdown text to be consumed
////////////////////////////////////////////////////////////
export function uploadImage(props){ 
    
    let upload = request.post("https://api.cloudinary.com/v1_1/ishanvadwala/upload")
                        .field('upload_preset', "qjndfgea")
                        .field('file', props.file);

    return function(dispatch){
        upload.then((response)=>{

            dispatch({type: MARKDOWN_ADDED, payload: response.body.secure_url});
            if(props.isPostTitleImage)
                dispatch(change('newPost', "postTitleImageURL", response.body.secure_url));
            else
                dispatch(change('newPost', "postContent", props.content
                +"\n"+"![alt text]("+response.body.secure_url+")"));
        }).catch((error)=>{
            console.log("ERROR_ACTION_UPLOAD_IMAGE"+JSON.stringify(error));
        });
    }
    
}

//////////////////////////////////////////////////////////////
//Dispatch Action to alert that the markdown has been consumed
//////////////////////////////////////////////////////////////
export function markDownConsumed(){
    return({type: MARKDOWN_CONSUMED});
}

