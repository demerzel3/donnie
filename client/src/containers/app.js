import React, { Component, PropTypes } from 'react'
import Item from '../components/Item';
import { connect } from 'react-redux';

class App extends Component
{
    constructor() {
        super();
    }

    render() {
        // Injected by the call to connect.
        const { todos } = this.props;

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
            </div>
        );
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