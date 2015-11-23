import { ActionTypes } from './actions';

const initialState = {
    todos: [
        {
            id: 1,
            message: 'Foo',
            editing: false,
        },
        {
            id: 2,
            message: 'Bar',
            editing: false,
        },
        {
            id: 3,
            message: 'Baz',
            editing: false,
        },
    ],
};

function todos(state = [], action) {
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

export function todoApp(state = initialState, action) {
    return {
        todos: todos(state.todos, action),
    };
}