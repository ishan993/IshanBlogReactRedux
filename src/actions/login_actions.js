import request from 'superagent';
import config from '../config';
export const UPDATE_USER_LOGGED_IN = 'UPDATE_USER_LOGGED_IN';
export const UPDATE_LOGIN_MODAL_VISIBLE = 'UPDATE_LOGIN_MODAL_VISIBLE';
//const ROOT_URL = 'http://localhost:3000';
const ROOT_URL = 'https://ishan-blog-backend.herokuapp.com';

//Show or hide login modal
export function showLoginModal(bool){
    return({
        type: UPDATE_LOGIN_MODAL_VISIBLE,
        payload: bool
    });
}

//Log in user
//If 200OK, set the userLoggedIn displayProp to true
export function logInUser(){
    var loginReq = request.post(ROOT_URL+'/login')
                            .send({username: 'ishan993', password: 'Ishan'});
    return function(dispatch){
        loginReq.then((response)=>{
            console.log("login response: "+JSON.stringify(response.body));
            dispatch({type: UPDATE_USER_LOGGED_IN, payload: true});
            dispatch(showLoginModal(false));
            localStorage.setItem('userLoggedIn', true);
        }).catch((error)=>{
            console.log("LOGIN_ERROR: "+JSON.stringify(error));
            return false;
        })
    }
}

export function logOutUser(){
    localStorage.setItem("userLoggedIn", false);
    return({
        type: UPDATE_USER_LOGGED_IN,
         payload: false
    });
}
