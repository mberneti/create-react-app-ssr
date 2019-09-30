import { combineReducers, createStore } from 'redux';
import counterReducer from './reducer';

const rootReducer = combineReducers({
  count: counterReducer
});

export default function initializeStore(initialState = {}) {
  return createStore(rootReducer, initialState);
}