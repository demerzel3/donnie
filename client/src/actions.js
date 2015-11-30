
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';

export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const ADD_TODO = 'ADD_TODO';

export const ActionTypes = {
    SET_ACCESS_TOKEN,

    REQUEST_TODOS,
    RECEIVE_TODOS,

    ADD_TODO,
};

export function setAccessToken(accessToken) {
    return {
        type: SET_ACCESS_TOKEN,
        accessToken: accessToken,
    }
}

function requestTodos() {
    return {
        type: REQUEST_TODOS,
    };
}

function receiveTodos(data) {
    return {
        type: RECEIVE_TODOS,
        data: data,
    }
}

function fetchTodos(date) {
    return (dispatch, getState) => {
        dispatch(requestTodos());

        const state = getState();
        const headers = new Headers();
        const url = `https://idonethis.com/api/v0.1/dones/?team=${state.team}&done_date=2015-11-27&page_size=100`;
        headers.append('Authorization', `Token ${state.apiToken}`);

        console.log(state);

        return fetch(url, { headers: headers })
            .then(req => req.json())
            .then(json => dispatch(receiveTodos(json)))
    }
}

function shouldFetchTodos(state, date) {
    const todos = state.todos;
    if (todos.items.length === 0) {
        return true;
    }
}

export function fetchTodosIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchTodos(getState())) {
            return dispatch(fetchTodos());
        }
    }
}

let lastUsedId = 3;

export function addTodo(message) {
    lastUsedId++;
    // TODO: replace this with an AJAX call to add the item.
    return {
        type: ADD_TODO,
        id: lastUsedId,
        message,
    }
}