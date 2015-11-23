
export const ADD_TODO = 'ADD_TODO';

export const ActionTypes = {
    ADD_TODO,
};

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