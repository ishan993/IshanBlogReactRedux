import {UPDATE_SEARCHTERM} from '../actions/index';

const DEFAULT_STATE= {searchTerm: ''}
export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case UPDATE_SEARCHTERM: 
            return {...state, searchTerm: action.payload}
        break;
        default: 
            return state;
        break;
    }
}