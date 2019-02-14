import { 
    UPDATE_LIST, 
    UPDATE_PROFILE, 
    MOVIES_FETCHED,
    MOVIES_FETCH_FAILED,
    FETCHING_MOVIES
} from './Browse.actions'

import {
    CREATE_MOVIE
} from '../Create/Create.actions';

const initial_state = {
    original_list: [],
    displayed_list: [],
    profile_data: {},
    isLoading:false,
    errorMsg:''
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case UPDATE_LIST:
            return Object.assign({},state,{
                displayed_list: action.payload 
            })
        case UPDATE_PROFILE:
            return Object.assign({},state,{
                profile_data: action.payload
            })
        case MOVIES_FETCH_FAILED:
            return Object.assign({},state,{
                errorMsg:action.payload
            })
        case FETCHING_MOVIES:
            return Object.assign({},state,{
                isLoading:true
            })
        case MOVIES_FETCHED:
            return Object.assign({},state,{
                profile_data: action.payload[0],
                original_list: action.payload,
                displayed_list: action.payload,
                isLoading:false
            })
        case CREATE_MOVIE:
            return {
                ...state,
                displayed_list: [...state.displayed_list, action.payload], 
                original_list: [...state.original_list, action.payload], 
                profile_data:  action.payload
            }
        default:
            return state;
    }
}