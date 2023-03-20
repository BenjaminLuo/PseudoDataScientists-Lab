
import {createStore, applyMiddleware} from 'redux';
import api from '../api';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(
    thunk.withExtraArgument(api),
    ),
    );

export default store;