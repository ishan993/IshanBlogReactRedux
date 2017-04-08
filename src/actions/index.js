import axios from 'axios';
import { browserHistory } from 'react-router';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=ishan';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_WINDOW_SIZE =  'UPDATE_WINDOW_SIZE';
export const ENABLE_SEARCH = 'ENABLE_SEARCH';
export const UPDATE_SEARCHTERM = 'UPDATE_SEARCHTERM';
export const UPDATE_RESUME_VISIBLE ='UPDATE_RESUME_VISIBLE';
export const UPDATE_LOGIN_MODAL_VISIBLE = 'UPDATE_LOGIN_MODAL_VISIBLE';
export const UPDATE_LOGIN_TAB_VISIBLE = 'UPDATE_LOGIN_TAB_VISIBLE';
export const UPDATE_USER_LOGGED_IN = 'UPDATE_USER_LOGGED_IN';

export function fetchPosts(){
    var request = axios.get(`${ROOT_URL}posts${API_KEY}`);
    return function(dispatch){
         request.then((response)=>{
            dispatch({
                type: FETCH_POSTS, 
                payload: response.data
            });
        });
    }
}

export function createPost(props){
    var request = axios.post(`${ROOT_URL}posts${API_KEY}`, props);

    return function(dispatch){
        request.then((response) =>{
                 dispatch({
                     type: CREATE_POST,
                     payload: response
                    });
                    browserHistory.push('/');
        }).catch((error)=>{
            console.log("ERROR_FETCHPOSTS"+JSON.stringify(error));
        })
    }
}

export function fetchPost(id){
    var req = axios.get(`${ROOT_URL}posts/${id}${API_KEY}`);

    return function(dispatch){
        req.then((response) =>{
            console.log("I got this post: "+response.data);
            dispatch({
                type: FETCH_POST,
                payload: response.data
            })
            
        }).catch((error)=>{
            console.log("ERROR_FETCHPOST"+error);
        });
    }
}

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

export function showLoginModal(bool){
    console.log("Actions--> showLoginModal:"+bool);
    return({
        type: UPDATE_LOGIN_MODAL_VISIBLE,
        payload: bool
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

//Log in user
//If 200OK, set the userLoggedIn displayProp to true
export function logInUser(){
    console.log("Actions--> logInUser");
    var req = axios.get(`http://reduxblog.herokuapp.com/api/posts?key=ishan`);

    return function(dispatch){
        req.then((response)=>{
            console.log("REQ_COMPLETE");
            dispatch({type: UPDATE_USER_LOGGED_IN, payload: true});
            showLoginModal(false);
            localStorage.setItem('userLoggedIn', true);
        }).catch((error)=>{
            console.log("LOGIN_ERROR: "+JSON.stringify(error));
            return false;
        })
    }
}