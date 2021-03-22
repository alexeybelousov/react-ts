import { TodosAction, TodosActionTypes } from '../../types/todos';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({ type: TodosActionTypes.FETCH_TODOS });
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _page: page, _limit: limit }
            });
            dispatch({ 
                type: TodosActionTypes.FETCH_TODOS_SUCCESS, 
                payload: response.data,
            });
        } catch (e) {
            dispatch({ 
                type: TodosActionTypes.FETCH_TODOS_ERROR, 
                payload: e.toString(),
            });
        }
    }
}

export const setTodosPage = (page: number) => {
    return { type: TodosActionTypes.SET_TODO_PAGE, payload: page };
}
