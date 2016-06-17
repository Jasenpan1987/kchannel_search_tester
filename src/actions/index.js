import axios from 'axios';

import { SEARCH_RESULT, SEARCH_ERROR, SEARCH_INIT } from './types';

import { AUTH_HEADER } from '../config';

import { ROOT_API } from '../config'

export function searchSongs(keywords){
    return function(dispatch){
        if(keywords==''){
            dispatch({
                type: SEARCH_INIT,
            })
        }else{
            keywords.replace(' ', '+');
            axios.get(`${ROOT_API}/songs?q=${keywords}`, {
                headers: {Authorization: AUTH_HEADER}
            }).
            then(response => {
                dispatch({
                    type: SEARCH_RESULT,
                    payload: response.data,
                });

            }).catch(error=>{
                console.log(error)
                dispatch({
                    type: SEARCH_ERROR,
                    payload: error,
                });
            })
        }

    };
}