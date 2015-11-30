import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './containers/App'
import {todoApp} from './reducers'
import Moment from 'moment'
import momentLocalizer from 'react-widgets/lib/localizers/moment'

momentLocalizer(Moment);

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    thunk,
    logger
)(createStore);

let store = createStoreWithMiddleware(todoApp);

let rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);