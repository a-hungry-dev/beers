import {
    FETCH_TODOS_FAILURE,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_REQUEST
} from '../constants/actionTypes';
import axios from 'axios';

const fetchTodosRequest = () => {
    return {
        type: FETCH_TODOS_REQUEST
    };
};

const fetchTodosSuccess = (todos) => {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos
    };
};

const fetchTodosFailure = (error) => {
    return {
        type: FETCH_TODOS_FAILURE,
        payload: error
    };
};

export const fetchTodos = () => (dispatch) => {
    dispatch(fetchTodosRequest());
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(({ data }) => {
            dispatch(fetchTodosSuccess(data));
        }).catch(({ message }) => {
            dispatch(fetchTodosFailure(message));
        });
};