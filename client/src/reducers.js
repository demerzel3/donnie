import { ActionTypes } from './actions';
import { combineReducers } from 'redux';

const initialState = {
    apiToken: null,
    team: 'adespresso',
    todos: {
        items: [],
    },
};

function apiToken(token = initialState.apiToken, action) {
    switch (action.type) {
        case ActionTypes.SET_ACCESS_TOKEN:
            return action.accessToken;
        default:
            return token;
    }
}

function team(name = initialState.team, action) {
    return name;
}

function todos(state = initialState.todos, action) {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [
                ...state, {
                    id: action.id,
                    message: action.message,
                    editing: false,
                }
            ];
        default:
            return state;
    }
}

export let todoApp = combineReducers({
    apiToken,
    team,
    todos,
});