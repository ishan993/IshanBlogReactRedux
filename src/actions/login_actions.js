import request from 'superagent';
import config from '../config';
import {toggleAuthErrorAction, toggleLoadingGraphicAction} from '../actions';

export const UPDATE_USER_LOGGED_IN = 'UPDATE_USER_LOGGED_IN';
export const UPDATE_LOGIN_MODAL_VISIBLE = 'UPDATE_LOGIN_MODAL_VISIBLE';
const ROOT_URL = 'http://localhost:3000';
//const ROOT_URL = 'https://ishan-blog-backend.herokuapp.com';


//Show or hide login modal
export function showLoginModal(bool){
    return({
        type: UPDATE_LOGIN_MODAL_VISIBLE,
        payload: bool
    });
}

export function checkUserLoggedInAction(){
    if(localStorage.getItem('userLoggedIn') == 'true'){
        return({
            type: UPDATE_USER_LOGGED_IN,
            payload: true
        });
    } else{
        return({
            type: UPDATE_USER_LOGGED_IN,
            payload: false
        })
    }
}

export const signUpUser = (props)=>{

    var signUpReq =  request.post(ROOT_URL+'/signup')
                            .send(props)
                             .set('Content-Type', 'application/json');
    return function(dispatch){
        dispatch(toggleLoadingGraphicAction(true));

        signUpReq.then((response)=>{
            dispatch(toggleLoadingGraphicAction(false));
            dispatch(showLoginModal(false));
            
            console.log("SIGNUP_REQ_OK"+response.body);
        })
        .catch((error)=>{
            dispatch(toggleLoadingGraphicAction(false));
            dispatch(toggleAuthErrorAction({showError: true, message: error.response.body.message}));
            console.log("SIGNUP_REQ_ERR"+JSON.stringify(error.response.body.message));
        })

    }
}


//Log in user
//If 200OK, set the userLoggedIn displayProp to true
export function logInUser(values){
    var loginReq = request.post(ROOT_URL+'/login')
                          .send(values)
                          .set('Content-Type', 'application/json');

    return function(dispatch){
        dispatch(toggleLoadingGraphicAction(true));
        loginReq.then((response)=>{
            console.log("login response: "+JSON.stringify(response.body));
            dispatch(toggleAuthErrorAction({showError: false, message: null}));
            dispatch(toggleLoadingGraphicAction(false));
            dispatch({type: UPDATE_USER_LOGGED_IN, payload: true});
            dispatch(showLoginModal(false));
            localStorage.setItem('userLoggedIn', true);
            localStorage.setItem('token', response.body.token);
        }).catch((error)=>{
            dispatch(toggleLoadingGraphicAction(false));
            dispatch(toggleAuthErrorAction({showError: true, message: error.response.body.message}));
            console.log("LOGIN_ERROR: "+JSON.stringify(error.response.body.message));
        })
    }
}

export function logOutUser(){
    localStorage.setItem("userLoggedIn", false);
    localStorage.removeItem("token");
    return({
        type: UPDATE_USER_LOGGED_IN,
         payload: false
    });
}
