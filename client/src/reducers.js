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

export function todoApp(state = initialState, action) {
    // For now, don’t handle any actions
    // and just return the state given to us.
    return state;
}