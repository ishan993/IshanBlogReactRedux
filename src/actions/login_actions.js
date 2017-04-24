import request from 'superagent';
import config from '../config';
export const UPDATE_USER_LOGGED_IN = 'UPDATE_USER_LOGGED_IN';
export const UPDATE_LOGIN_MODAL_VISIBLE = 'UPDATE_LOGIN_MODAL_VISIBLE';
const UPDATE_LOADING_MODAL_VISIBLE = 'UPDATE_LOADING_MODAL_VISIBLE';
const ROOT_URL = 'http://localhost:3000';
//const ROOT_URL = 'https://ishan-blog-backend.herokuapp.com';
const ShowLoadingGraphicAction = {type: UPDATE_LOADING_MODAL_VISIBLE, payload: true};
const HideLoadingGraphicAction = {type: UPDATE_LOADING_MODAL_VISIBLE, payload: false};
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


export function signUpUser(props){
    console.log("Trying to sign up");

    var signUpReq =  request.post(ROOT_URL+'/signup')
                            .send(props);
    return function(dispatch){
        dispatch(ShowLoadingGraphicAction);

        signUpReq.then((response)=>{
            dispatch(HideLoadingGraphicAction);
            dispatch(showLoginModal(false));
            
            console.log("SIGNUP_REQ_OK"+response.body);
        })
        .catch((error)=>{
            console.log("SIGNUP_REQ_ERR"+JSON.stringify(error));
        })

    }
}


//Log in user
//If 200OK, set the userLoggedIn displayProp to true
export function logInUser(){
    var loginReq = request.post(ROOT_URL+'/login')
                          .send({username: 'ishan993', password: 'Ishan'});

    return function(dispatch){
        dispatch(ShowLoadingGraphicAction);
        loginReq.then((response)=>{
            console.log("login response: "+JSON.stringify(response.body));

            dispatch(HideLoadingGraphicAction);
            dispatch({type: UPDATE_USER_LOGGED_IN, payload: true});
            dispatch(showLoginModal(false));

            localStorage.setItem('userLoggedIn', true);
        }).catch((error)=>{
            console.log("LOGIN_ERROR: "+JSON.stringify(error));

            dispatch(HideLoadingGraphicAction);
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
