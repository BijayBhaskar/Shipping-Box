// src/redux/store.js
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import boxReducer from './reducers/boxReducer';

const rootReducer = combineReducers({
  boxes: boxReducer,
});

const store = createStore(rootReducer);

export default store;
