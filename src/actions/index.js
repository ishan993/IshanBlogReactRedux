import axios from 'axios';
import { browserHistory } from 'react-router';
import request from 'superagent';
import {store} from '../index';
import {change} from 'redux-form';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'http://localhost:3000';
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
export const MARKDOWN_ADDED = 'MARKDOWN_ADDED';
export const MARKDOWN_CONSUMED = 'MARKDOWN_CONSUMED';



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

////////////////////////////////////////
//Actions related to a single post
///////////////////////////////////////

//Submit newPost form
export function submitNewPost(values){
    console.log("Submitting form w/ values: "+values);
    let submit = request.post("http://localhost:3000/createpost")
                        .send(values);
    return function(dispatch){
        submit.then((response)=>{
            console.log("I got my response here:"+JSON.stringify(response));
        }).catch(error=>{
            console.log("ERROR_ACTIONS_SUBMIT_NEW_POST"+JSON.stringify(error));
        })
    }
        
}


//Fetch new post for ShowPost
export function fetchPostWithId(id){
    console.log("ACTION-->FETCHPOST id:"+id);
    console.log(`${ROOT_URL}/fetchpost/${id}`)
    let fetch = request.get(`${ROOT_URL}/fetchpost/${id}`);

    return function(dispatch){
        fetch.then((response)=>{
            console.log("ACTION-->FETCHPOST-->SUCCESS_RESPONSE"+JSON.parse(response.text).postTitle);
            dispatch({type: FETCH_POST, payload: JSON.parse(response.text)})
        }).catch((error)=>{
            console.log("ACTION-->FETCHPOST-->ERROR_RESPONSE"+JSON.stringify(error));
        });
    }

}