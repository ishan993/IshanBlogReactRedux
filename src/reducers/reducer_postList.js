import {FETCH_POSTS} from '../actions/index';
import { CREATE_POST } from '../actions/index';
import { FETCH_POST } from '../actions/index';
import { DELETE_POST } from '../actions/index';
const DEFAULT_State = {all :[], post: null};

export default function (state = DEFAULT_State, action){
      switch(action.type){
      case FETCH_POSTS:
        return {...state, all: action.payload};
        break;
      case CREATE_POST:
        return {...state, post: action.payload}
        break;
      case FETCH_POST:
        return {...state, post: action.payload};
      case DELETE_POST:
        return {...state, post: null};
      default:
        return state;
        break;
      }
}