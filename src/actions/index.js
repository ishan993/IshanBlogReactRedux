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


export function fetchPosts(){
    var request = axios.get(`${ROOT_URL}posts${API_KEY}`);
    console.log("calling this!");
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
    console.log(`${ROOT_URL}posts${API_KEY}`);
    console.log(props);

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
