import React, { Component, PropTypes } from 'react'
import Item from '../components/Item';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class App extends Component
{
    constructor() {
        super();
    }

    render() {
        // Injected by the call to connect.
        const { dispatch, todos } = this.props;

        return (
            <div>
                <h1>Today Donnie has Done:</h1>
                {todos.map((todo, index) => {
                    return (
                        <Item key={todo.id}
                              message={todo.message}
                              editing={todo.editing}
                              onEdit={() => console.log('OnEditItem', todo.id, 'at', index)}
                              onSave={() => console.log('OnSaveItem', todo.id, 'at', index)}
                        />
                    );
                })}
                <p>Add another:</p>
                <input type="text" ref="newTodoBox" /> <button onClick={e => this.newButtonClickHandler(dispatch)}>Add</button>
            </div>
        );
    }

    newButtonClickHandler(dispatch) {
        const { newTodoBox } = this.refs;
        dispatch(addTodo(newTodoBox.value));

        newTodoBox.value = '';
    }
}

App.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        editing: PropTypes.bool.isRequired,
    })),
};

function select(state) {
    return {
        todos: state.todos,
    };
}

export default connect(select)(App);