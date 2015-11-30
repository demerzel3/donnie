import React, { Component, PropTypes } from 'react';
import { Calendar } from 'react-widgets';
import Item from '../components/Item';
import { addTodo, setAccessToken, fetchTodosIfNeeded } from '../actions';
import { connect } from 'react-redux';

class App extends Component
{
    constructor() {
        super();
    }

    renderAccessTokenForm() {
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
                    <div className="col-lg-12">
                        Paste your iDoneThis API Access Token in the box below to begin:
                        <form className="form-inline" onSubmit={e => { this.onAccessTokenSubmit(e, dispatch) }}>
                            <input className="form-control" type="text" ref="accessTokenBox" />
                            <button className="btn btn-primary" type="submit">Go!</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    renderMain() {
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
                        {todos.items.map((todo, index) => {
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

    render() {
        if (this.props.apiToken) {
            return this.renderMain();
        } else {
            return this.renderAccessTokenForm();
        }
    }

    newButtonClickHandler(dispatch) {
        const { newTodoBox } = this.refs;
        dispatch(addTodo(newTodoBox.value));

        newTodoBox.value = '';
    }

    onAccessTokenSubmit(event, dispatch) {
        const { accessTokenBox } = this.refs;
        event.preventDefault();

        dispatch(setAccessToken(accessTokenBox.value));
    }

    componentDidUpdate() {
        console.log('App component DID update');
        const { dispatch, apiToken } = this.props;

        if (apiToken) {
            dispatch(fetchTodosIfNeeded());
        }
    }
}

App.propTypes = {
    /*
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        editing: PropTypes.bool.isRequired,
    })),
    */
};

function select(state) {
    return {
        apiToken: state.apiToken,
        todos: state.todos,
    };
}

export default connect(select)(App);