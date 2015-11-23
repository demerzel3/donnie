import React from 'react';
import Item from '../components/Item';
import { connect } from 'react-redux';

class App extends React.Component
{
    constructor() {
        super();

        this.state = {
            items: [
                {
                    id: 1,
                    message: 'Foo',
                },
                {
                    id: 2,
                    message: 'Bar',
                },
                {
                    id: 3,
                    message: 'Baz',
                }
            ],
        }
    }

    render() {
        return (
            <div>
                <h1>Today Donnie has Done:</h1>
                {this.state.items.map(function (item) {
                    return (
                        <Item key={item.id} model={item}/>
                    );
                })}
            </div>
        );
    }
}

function select(state) {
    return state;
}

export default connect(select)(App);