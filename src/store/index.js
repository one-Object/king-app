import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { isWindow } from '@/utils/execEnv';
import authInfo from './reducers/authInfo';
import todoList from './reducers/todoList';
import logMiddleware from './middlewares/logMiddleware';
import routerMiddleware from './middlewares/routerMiddleware';

const initialState = {};
const root = isWindow ? window : {};

const middlewares = [thunk, logMiddleware(), routerMiddleware()];

const composeEnhancers = compose(
    applyMiddleware(...middlewares),
    root.__REDUX_DEVTOOLS_EXTENSION__ ? root.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);

const reducers = combineReducers({ authInfo, todoList });

const store = createStore(reducers, initialState, composeEnhancers);

export default store