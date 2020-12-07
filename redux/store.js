// @flow
import {
    createStore,
    compose,
    combineReducers,
    applyMiddleware,
} from 'redux';

import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import historyReducer, { moduleName as historyModuleName } from './history';
import payloadReducer, { moduleName as payloadModuleName } from './payload';

const rootReducer = combineReducers({
    [historyModuleName]: historyReducer,
    [payloadModuleName]: payloadReducer,
});

const inBrowser = typeof window !== 'undefined';
const notProd = process.env.NODE_ENV !== 'production';

const enhancers = compose(
    inBrowser && notProd ? window.devToolsExtension && window.devToolsExtension() : (f) => f,
);

const middlewares = [thunkMiddleware];

if (notProd) {
    middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default (initialState) => (
    createStoreWithMiddleware(rootReducer, initialState, enhancers)
);
