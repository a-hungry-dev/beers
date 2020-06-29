import {
    FETCH_TODOS_FAILURE,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_REQUEST
} from '../constants/actionTypes';

const initialState = {
    loading: false,
    todos: [],
    error: null
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_TODOS_SUCCESS:
            return {
                loading: false,
                todos: action.payload,
                error: null
            };
        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    };
};