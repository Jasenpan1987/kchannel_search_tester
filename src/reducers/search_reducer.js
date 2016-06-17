import { SEARCH_RESULT, SEARCH_ERROR, SEARCH_INIT } from '../actions/types';

export default function(state={songs:[], errors:''}, action){
    switch(action.type){
        case SEARCH_RESULT:
            //console.log(action.payload)
            return {songs: action.payload, errors:''};
        case SEARCH_ERROR:
            return {songs:[], errors:action.payload};
        case SEARCH_INIT:
            return {songs:[], errors:''}
        default:
            return state;
    }
}