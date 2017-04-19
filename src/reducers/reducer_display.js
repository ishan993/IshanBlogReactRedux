import {UPDATE_WINDOW_SIZE, ENABLE_SEARCH,
     UPDATE_RESUME_VISIBLE,UPDATE_LOGIN_MODAL_VISIBLE,
      UPDATE_LOGIN_TAB_VISIBLE, UPDATE_USER_LOGGED_IN} from '../actions/index';


const DEFAULT_STATE = {isMobile: null,
     searchEnabled: false, 
     resumeVisible: false,
     loginModalVisible: false,
     loginTabVisible: true,
     userLoggedIn: false
    }

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case UPDATE_WINDOW_SIZE:
            if (action.payload < 720)
                return {...state, isMobile: true};
            else
                return {...state, isMobile: false};
        break;  
        case ENABLE_SEARCH:
             return {...state, searchEnabled: action.payload};
        break;
        case UPDATE_RESUME_VISIBLE: 
            return {...state, resumeVisible: action.payload};
        break;
        case UPDATE_LOGIN_MODAL_VISIBLE:
            return {...state, loginModalVisible: action.payload};
            break;
        case UPDATE_LOGIN_TAB_VISIBLE:
            return {...state, loginTabVisible: action.payload};
        case UPDATE_USER_LOGGED_IN:
            return {...state, userLoggedIn: action.payload};
        default: 
            return state;
        break;
    }
}