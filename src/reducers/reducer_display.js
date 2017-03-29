import {UPDATE_WINDOW_SIZE, ENABLE_SEARCH} from '../actions/index';


const DEFAULT_STATE = {isMobile: null, searchEnabled: false}

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case UPDATE_WINDOW_SIZE:
            if (action.payload < 720)
                return {...state, isMobile: true};
            else
                return {...state, isMobile: false}
        break;  
        case ENABLE_SEARCH:
             return {...state, searchEnabled: action.payload};
        break;
        default: 
            return state;
        break;
    }
}