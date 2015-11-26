import React, { Component, PropTypes } from 'react';
import { Calendar } from 'react-widgets';
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
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Today Donnie has Done</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <Calendar/>
                    </div>
                    <div className="col-lg-9">
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
                        <form className="form-inline" onSubmit={e => { e.preventDefault(); this.newButtonClickHandler(dispatch) }}>
                            <input className="form-control" type="text" ref="newTodoBox" />
                            <button className="btn btn-primary" type="submit">Add</button>
                        </form>
                    </div>
                </div>
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