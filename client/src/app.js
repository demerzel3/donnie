import {ItemView} from './item';

class AppView extends React.Component
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
                        <ItemView key={item.id} model={item}/>
                    );
                })}
            </div>
        );
    }
}


ReactDOM.render(
    ( <AppView></AppView> ),
    document.querySelector('#root')
);