import { combineReducers } from 'redux';


import counterReducer from './Counter/reducer/index';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;